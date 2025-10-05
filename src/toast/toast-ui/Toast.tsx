import './style.css'
import { useToast } from '../hook/useToast'
import type { ToastItem } from '../types/types'
import { useEffect, useRef, useState } from 'react'
import Info from '../../assets/info.png'
import Success from '../../assets/success.png'
import Warning from "../../assets/warning.png"
import ErrorIcon from "../../assets/error.png"
import Close from '../../assets/close.png'


const ToastIcons: Record<"info" | "success" | "warning" | "error", string> = {
  info: Info,
  success: Success,
  warning: Warning,
  error: ErrorIcon,
};

export default function Toast({ id, message, type = "info", position,duration = 5000 }: ToastItem) {
  const { removeToast } = useToast();
  const [progress, setProgress] = useState(100);
  const [isPaused, setIsPaused] = useState(false)


  const startTimeRef = useRef(Date.now());
  const remainingRef = useRef(duration);
  
useEffect(() => {
    let interval: NodeJS.Timeout;

    const tick = () => {
      const elapsed = Date.now() - startTimeRef.current;
      const newRemaining = remainingRef.current - elapsed;

      if (newRemaining <= 0) {
        setProgress(0);
        removeToast(id);
        clearInterval(interval);
      } else {
        setProgress((newRemaining / duration) * 100);
      }
    };

    if (!isPaused) {
      startTimeRef.current = Date.now(); // reset timer start
      interval = setInterval(tick, 100);
    }

    return () => clearInterval(interval);
  }, [id, removeToast, duration, isPaused]);

  const handlePause = () => {
    setIsPaused(true);
    // pause hone par remaining time calculate karke save kar lo
    remainingRef.current -= Date.now() - startTimeRef.current;
  };

  const handleResume = () => {
    setIsPaused(false);
    // resume hone par naya start time set kar lo
    startTimeRef.current = Date.now();
  };



  return (
    <div className={`toast ${position}`} data-toast-type={type}
      onMouseEnter={handlePause}
      onMouseLeave={handleResume}
      >
      <div className="toast-content">
        <img src={ToastIcons[type]} width={45} height={45} alt={type} />
        <span>{message}</span>
      </div>
      <button onClick={() => removeToast(id)} className="toast-close">
        <img src={Close} width={30} height={30} alt="close" />
      </button>

      <div className="toast-progress">
        <div
          className="toast-progress-bar"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}
