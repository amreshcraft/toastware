
export type ToastItem = {
    id: string;
    message: string;
    type?: "success" | "error" | "info" | "warning";
    position: "top-right" | "top-left" | "bottom-left" | "bottom-right";
    duration?: number; // ms
};



export type ToastContextType = {
    addToast: (message: string, type?: ToastItem["type"], position?: ToastItem["position"], duration?: number) => void;
    removeToast: (id: string) => void;
};