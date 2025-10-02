import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react"
import ReactDOM from 'react-dom'
import getOrCreatePortalRoot from "../utils";
import Toast from "../toast-ui/Toast";


type Toast = {
    id: string;
    message: string;
    type?: "success" | "error" | "info" | "warning";
    position: "top-right" | "top-left" | "bottom-left" | "bottom-right";
    duration?: number; // ms
};


type ToastContextType = {
    addToast: (message: string, type?: Toast["type"], position?: Toast["position"], duration?: number) => void;
    removeToast: (id: string) => void;
};



const ToastContext = createContext<ToastContextType | null>(null);

export default function ToastProvider({ children }: { children: ReactNode }) {

    const [toasts, setToasts] = useState<Toast[]>([])

    const removeToast = useCallback((id: string) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, []);

    const addToast = useCallback(
        (message: string, type: Toast["type"] = "info", position: Toast["position"] = "top-right", duration = 5000) => {
            const id = crypto.randomUUID();
            const newToast: Toast = { id, message, type, position, duration };
            setToasts((prev) => [...prev, newToast]);

            if (duration > 0) {
                setTimeout(() => removeToast(id), duration);
            }
        },
        [removeToast]
    );

    const value = useMemo(() => ({ addToast, removeToast }), [addToast, removeToast]);
    return (
        <ToastContext.Provider value={value}>
            {children}
            {/* render all toast in react portal */}

            {
                ReactDOM.createPortal(
                    <div className="toast-container">
                        {toasts.map((toast) => (
                            <Toast {...toast} key={toast.id} />
                        ))}
                    </div>,
                    getOrCreatePortalRoot()
                )}

        </ToastContext.Provider>
    )
}



export function useToast() {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error("useToast must use within ToastContainer")
    }
    return context;
}