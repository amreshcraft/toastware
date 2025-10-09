import './App.css'
import toastware from './toast/toaster'
export default function App() {
 

  return (
    <div className="app" >
        <h1>Hello App</h1>
        <button onClick={()=>{toastware.addToast("Test toast 1 ds","error","top-left")}}>Toast - Top Left </button>
        <button onClick={()=>{toastware.addToast("Test toast 2vx","success","top-right")}}>Toast - Top Right </button>
        <button onClick={()=>{toastware.addToast("Test  3","warning","bottom-left")}}>Toast - Bottom Left </button>
        <button onClick={()=>{toastware.addToast("Test toast 4","info","bottom-right")}}>Toast - Bottom Right </button>
    </div>
  )
}