import Toast from "../toast-ui/Toast";
import type { ToastItem } from "../types/types";
import './style.css'

export default function ToastContainer({ toasts }: { toasts: ToastItem[] }) {
  // group by position
  const grouped = toasts.reduce<Record<string, ToastItem[]>>((acc, toast) => {
    if (!acc[toast.position]) acc[toast.position] = [];
    acc[toast.position].push(toast);
    return acc;
  }, {});

  return (
    <>
      {Object.entries(grouped).map(([position, items]) => (
        <div key={position} className={`toast-container ${position}`}>
          {items.map((toast) => (
            <Toast {...toast} key={toast.id} />
          ))}
        </div>
      ))}
    </>
  )
}
