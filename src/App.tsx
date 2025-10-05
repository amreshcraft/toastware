import { useToast } from "./toast/hook/useToast";
import './App.css'
export default function App() {
    const {addToast}  = useToast();

  return (
    <div className="app" >
        <h1>Hello App</h1>
        <button onClick={()=>{addToast("Test toast 1 dsssssssssssssssssssssssssss","error","top-left")}}>Toast - Top Left </button>
        <button onClick={()=>{addToast("Test toast 2vcxxxxxxxxxxxx","success","top-right")}}>Toast - Top Right </button>
        <button onClick={()=>{addToast("Test  3","warning","bottom-left")}}>Toast - Bottom Left </button>
        <button onClick={()=>{addToast("Test toast 4","info","bottom-right")}}>Toast - Bottom Right </button>
    </div>
  )
}