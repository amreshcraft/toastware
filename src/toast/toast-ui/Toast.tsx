import './style.css'
import Info from '../../assets/info.png'
import Success from '../../assets/success.png'
import Warning from "../../assets/warning.png"
import ErrorIcon from "../../assets/error.png"
import Close from '../../assets/close.png'
import { useToast } from '../hook/useToast'
import type { ToastItem } from '../types/types'
import { useEffect, useState } from 'react'

const ToastIcons: Record<"info" | "success" | "warning" | "error", string> = {
  info: Info,
  success: Success,
  warning: Warning,
  error: ErrorIcon,
};

export default function Toast({ id, message, type = "info", position }: ToastItem) {
  const { removeToast } = useToast();
  const [progress, setProgress] = useState(100);
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const duration = 5000; 
    const step = 100 / (duration / 100); 

    const interval = setInterval(() => {
      if(!isPaused){
      setProgress(prev => {
        if (prev <= 0) {
          clearInterval(interval);
          removeToast(id);
          return 0;
        
      }
        return prev - step;
      
      });
    }
    }, 100);

    return () => clearInterval(interval);
  }, [id, removeToast,isPaused]);

  return (
    <div className={`toast ${position}`} data-toast-type={type} onMouseEnter={()=>setIsPaused(true)} onMouseLeave={()=>setIsPaused(false)}>
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
