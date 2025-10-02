import  { useToast } from "../toast-provider/ToastProvider";

export default function Notification() {
const {addToast} = useToast();
  function handleToast(){
    addToast("Hello Toast","info")
  }
  return (
    <div>
     
       <h1>Hello Demo</h1>
       <button onClick={handleToast}>Add Toast</button>
     
    </div>
  )
}