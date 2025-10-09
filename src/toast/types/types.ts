
export interface ToastItem {
  id: string;
  message: string;
  type?: "success" | "error" | "info" | "warning";
  position: "top-right" | "top-left" | "bottom-left" | "bottom-right";
  duration?: number; // in ms
}

export interface ToastContextType {
  addToast: (
    message: string,
    type?: ToastItem["type"],
    position?: ToastItem["position"],
    duration?: number
  ) => void;
  removeToast: (id: string) => void;
  clearToasts :()=>void;
}


export interface ToastAPI{
    addToast? :(...args : any[])=>void
    notify? :(...args : any[])=>void,
    success? : (...args : any[])=>void,
    error? : (...args : any[])=>void,
    info? : (...args : any[])=>void,
    removeById? :(id : string)=>void,
    removeToast? : (id : string)=>void;
    clearToasts? :()=>void
    clear? : ()=>void
}
