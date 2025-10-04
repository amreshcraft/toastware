import { createRoot } from "react-dom/client";
import ToastProvider from "./toast/toast-provider/ToastProvider";
import App from "./App";
import './index.css'

const root = document.getElementById("root");

createRoot(root!).render(
<ToastProvider>
    <App/>
</ToastProvider>
)