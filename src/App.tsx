import { useToast } from "./toast/toast-provider/ToastProvider"

export default function App() {
    const {addToast}  = useToast();

  return (
    <div style={{display:"flex",flexDirection:"column",gap:15,width:"fit-content"}}>
        <h1>Hello App</h1>
        <button onClick={()=>{addToast("Test toast 1","error","top-left")}}>Toast - Top Left </button>
        <button onClick={()=>{addToast("Test toast 2","success","top-right")}}>Toast - Top Right </button>
        <button onClick={()=>{addToast("Test toast 3","warning","bottom-left")}}>Toast - Bottom Left </button>
        <button onClick={()=>{addToast("Test toast 4","info","bottom-right")}}>Toast - Bottom Right </button>
    </div>
  )
}