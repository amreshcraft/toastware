
import toaster from "../toaster";

export function useToast() {
   const context = toaster;
    if (!context) {
        throw new Error("useToast must use within ToastContainer or context is not defined")
    }
  const {
    addToast,
    notify,
    removeToast,
    clearToasts,
    success,
    error ,
    info, 
  } = context;

  return {
    addToast,
    notify,
    removeToast,
    clearToasts,
    success,
    error ,
    info, 
  };
}
