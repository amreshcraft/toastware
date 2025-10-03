import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react"
import ReactDOM from 'react-dom'
import getOrCreatePortalRoot from "../utils";
import type { ToastContextType, ToastItem } from "../types/types";
import ToastContainer from "../toast-container/ToastContainer";




export const ToastContext = createContext<ToastContextType | null>(null);

export default function ToastProvider({ children }: { children: ReactNode }) {
const [portalRoot, setPortalRoot] = useState<HTMLElement>();

useEffect(() => {
  setPortalRoot(getOrCreatePortalRoot());
}, []);

    const [toasts, setToasts] = useState<ToastItem[]>([])

    const removeToast = useCallback((id: string) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, []);

    const addToast = useCallback(
        (message: string, type: ToastItem["type"] = "info", position: ToastItem["position"] = "top-right", duration = 5000) => {
            const id = crypto.randomUUID();
            const newToast: ToastItem = { id, message, type, position, duration };
            setToasts((prev) => [...prev, newToast]);

            // if (duration > 0) {
            //     setTimeout(() => removeToast(id), duration);
            // }
        },
        [removeToast]
    );

    const value = useMemo(() => ({ addToast, removeToast }), [addToast, removeToast]);
    return (
        <ToastContext.Provider value={value}>
            {children}
            {/* render all toast in react portal */}

            { portalRoot &&
                ReactDOM.createPortal(
                  <ToastContainer toasts={toasts}/> ,
                    portalRoot!
                )
                
                }

        </ToastContext.Provider>
    )
}


