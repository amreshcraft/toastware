
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
    addToast? :(...args : any[])=>string
    notify? :(...args : any[])=>string,
    success? : (...args : any[])=>string,
    error? : (...args : any[])=>string,
    info? : (...args : any[])=>string,
    removeById? :(id : string)=>void,
    removeToast? : (id : string)=>void;
    clearToasts? :()=>void
    clear? : ()=>void
}

export interface PromiseToastMessages<T = any> {
  loading: string;
  success: string ;
  error: string ;
}
