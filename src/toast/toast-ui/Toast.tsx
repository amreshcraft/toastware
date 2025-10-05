import './style.css'
import { useToast } from '../hook/useToast'
import type { ToastItem } from '../types/types'
import { Suspense, useEffect, useRef, useState } from 'react'

import React from 'react'


import type { IconType } from "react-icons";

const LazyInfo = React.lazy(() =>
  import("react-icons/fa").then(mod => ({ default: mod.FaInfoCircle as IconType }))
);
const LazySuccess = React.lazy(() =>
  import("react-icons/si").then(mod => ({ default: mod.SiTicktick as IconType }))
);
const LazyWarning = React.lazy(() =>
  import("react-icons/io5").then(mod => ({ default: mod.IoWarning as IconType }))
);
const LazyError = React.lazy(() =>
  import("react-icons/md").then(mod => ({ default: mod.MdOutlineError as IconType }))
);
const LazyClose = React.lazy(() =>
  import("react-icons/io5").then(mod => ({ default: mod.IoCloseCircle as IconType }))
);



const ToastIcons: Record<"info" | "success" | "warning" | "error", React.LazyExoticComponent<IconType>> = {
  info: LazyInfo,
  success: LazySuccess,
  warning: LazyWarning,
  error: LazyError,
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

 const Icon = ToastIcons[type];

  return (
    <div className={`toast ${position}`} data-toast-type={type}
      onMouseEnter={handlePause}
      onMouseLeave={handleResume}
      >
      <div className="toast-content">
        {/* <img src={ToastIcons[type]} width={45} height={45} alt={type} /> */}
           <Suspense fallback={<span>...</span>}>
          <Icon size={45} />
        </Suspense>
        <span>{message}</span>
      </div>
      <button onClick={() => removeToast(id)} className="toast-close">
        {/* <img src={<LazyClose/>} width={30} height={30} alt="close" /> */}
        <LazyClose color='red' size={30}/>
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
