import Toast from "../toast-ui/Toast";
import type { ToastItem } from "../types/types";
import './style.css'

export default function ToastContainer({ toasts }: { toasts: ToastItem[] }) {
  return (
    <div className="toast-container">
        <h1>main container</h1>
      {toasts.map((toast) => (
        <Toast {...toast} key={toast.id} />
      ))}
    </div>
  )
}
