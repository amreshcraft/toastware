import { createContext, useCallback, useEffect, useMemo, useState, type ReactNode } from "react"
import ReactDOM from 'react-dom'
import getOrCreatePortalRoot from "../utils/getOrCreatePortalRoot";
import type { ToastContextType, ToastItem } from "../types/types";
import ToastContainer from "../toast-container/ToastContainer";
import { registerAPI } from "../core/globalStore";




export const ToastContext = createContext<ToastContextType | null>(null);

export default function ToastProvider({ children }: { children: ReactNode }) {
    const [portalRoot, setPortalRoot] = useState<HTMLElement>();

    useEffect(() => {
        setPortalRoot(getOrCreatePortalRoot());
    }, []);

    const [toasts, setToasts] = useState<ToastItem[]>([])

    function clearToasts() {
        setToasts([]);
    }

    const removeToast = useCallback((id: string) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, []);

    const addToast = useCallback(
        (message: string, type: ToastItem["type"] = "info", position: ToastItem["position"] = "top-right", duration = 5000) => {
            const id = crypto.randomUUID();
            const newToast: ToastItem = { id, message, type, position, duration };
            setToasts((prev) => [...prev, newToast]);
             return id;
        },
        []
    );

useEffect(()=>{
    registerAPI({addToast,removeToast,clearToasts})
}, [addToast, removeToast, clearToasts])

    const value = useMemo(() => ({ addToast, removeToast, clearToasts }), [addToast, removeToast, clearToasts]);
    return (
        <ToastContext.Provider value={value}>
            {children}
            {/* render all toast in react portal */}
            {portalRoot &&
                ReactDOM.createPortal(
                    <ToastContainer toasts={toasts} />,
                    portalRoot!
                )

            }

        </ToastContext.Provider>
    )
}


