import './style.css'
import { useToast } from '../hook/useToast'
import type { ToastItem } from '../types/types'
import { useEffect, useRef, useState } from 'react'
import { FaInfoCircle } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";
import { IoWarning, IoCloseCircle } from "react-icons/io5";
import { MdOutlineError } from "react-icons/md";
import toaster from '../toaster';

const ToastIcons: Record<"info" | "success" | "warning" | "error", React.ComponentType<{ size?: number; color?: string }>> = {
  info: FaInfoCircle,
  success: SiTicktick,
  warning: IoWarning,
  error: MdOutlineError,
};

export default function Toast({ id, message, type = "info", position, duration = 5000 }: ToastItem) {
  const { removeToastById } = toaster;
  const [progress, setProgress] = useState(100);
  const [isPaused, setIsPaused] = useState(false);
  const toastRef = useRef<HTMLDivElement>(null)
  const startTimeRef = useRef(Date.now());
  const remainingRef = useRef(duration);
  const previousFocus = useRef<HTMLElement | null>(null);

  // Focus & previous element
  useEffect(() => {
    previousFocus.current = document.activeElement as HTMLElement | null;
    toastRef.current?.focus();
  }, []);

  // Keyboard dismiss (ESC)
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        removeToastById(id);
        previousFocus.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [id, removeToastById]);

  // Progress logic
  useEffect(() => {
    let interval: NodeJS.Timeout;

    const tick = () => {
      const elapsed = Date.now() - startTimeRef.current;
      const newRemaining = remainingRef.current - elapsed;

      if (newRemaining <= 0) {
        setProgress(0);
        removeToastById(id);
        previousFocus.current?.focus();
        clearInterval(interval);
      } else {
        setProgress((newRemaining / duration) * 100);
      }
    };

    if (!isPaused) {
      startTimeRef.current = Date.now();
      interval = setInterval(tick, 100);
    }

    return () => clearInterval(interval);
  }, [id, removeToastById, duration, isPaused]);

  const handlePause = () => {
    setIsPaused(true);
    remainingRef.current -= Date.now() - startTimeRef.current;
  };

  const handleResume = () => {
    setIsPaused(false);
    startTimeRef.current = Date.now();
  };

  const Icon = ToastIcons[type];

  return (
    <div
      role={type !== "error" ? "status" : "alert"}
      aria-live={type !== "error" ? "polite" : "assertive"}
      tabIndex={-1}
      ref={toastRef}
      className={`toast ${position}`}
      data-toast-type={type}
      onMouseEnter={handlePause}
      onMouseLeave={handleResume}
    >
      <div className="toast-content">
        <Icon size={45} />
        <p className='.toast-message'>{message}</p>
      </div>
      <button
        onClick={() => {
          removeToastById(id);
          previousFocus.current?.focus();
        }}
        className="toast-close"
        aria-label="Close notification"
      >
        <IoCloseCircle color="red" size={30} />
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
