import './style.css'
import { useToast } from '../toast-provider/ToastProvider'
import Info from '../../assets/info.png'
import Success from '../../assets/success.png'
import Warning from "../../assets/warning.png"
import ErrorIcon from "../../assets/error.png"
import Close from '../../assets/close.png'

const ToastIcons: Record<"info" | "success" | "warning" | "error", string> = {
  info: Info,
  success: Success,
  warning: Warning,
  error: ErrorIcon,
};

type ToastProps = {
  id: string;
  message: string;
  type?: "success" | "error" | "info" | "warning";
  duration?: number;
};

export default function Toast({ id, message, type = "info" }: ToastProps) {
  const { removeToast } = useToast();

  return (
    <div className="toast" data-toast-type={type}>
      <div className="toast-content">
        <img src={ToastIcons[type]} width={45} height={45} alt={type} />
        <span>{message}</span>
      </div>
      <button onClick={() => removeToast(id)} className="toast-close">
        <img src={Close} width={30} height={30} alt="close" />
      </button>
    </div>
  );
}
