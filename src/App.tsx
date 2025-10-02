import Notification from "./toast/notification/notification";
import Toast from "./toast/Toast";
import ToastProvider from "./toast/toast-provider/ToastProvider";

export default function App() {
  return (
    <div>
      <ToastProvider>
        <Notification />
        <Toast id={"casfwfwe"} message={"Hello testing 1"} type={"info"}/>
        <Toast id={"casfwsdfwe"} message={"Hello testing 2"} type={"warning"}/>
        <Toast id={"casfwfdhfwe"} message={"Hello testing 3"} type={"success"}/>
        <Toast id={"casfwfdhfdgfwe"} message={"Hello testing 4"} type={"error"}/>

      </ToastProvider>
    </div>
  )
}