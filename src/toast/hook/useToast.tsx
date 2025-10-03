import { useContext } from "react";
import type { ToastItem } from "../types/types";
import { ToastContext } from "../toast-provider/ToastProvider";

export function useToast() {
   const context = useContext(ToastContext);
    if (!context) {
        throw new Error("useToast must use within ToastContainer or context is not defined")
    }
  const { addToast, removeToast } = context;

  return {
    addToast,
    removeToast,
    success: (msg: string, position?: ToastItem["position"]) =>
      addToast(msg, "success", position),
    error: (msg: string, position?: ToastItem["position"]) =>
      addToast(msg, "error", position),
  };
}
