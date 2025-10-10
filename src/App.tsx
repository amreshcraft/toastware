import './App.css'
import toastware from './toast/toaster'
export default function App() {

async function fetchUser(id: number) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!response.ok) throw new Error("Failed to fetch user");
  const result = response.json()
  console.log(result)
  return result
  //  as Promise<{ id: number; name: string; email: string }>;
}


  return (
    <div className="app" >
        <h1>Hello App</h1>
        <button onClick={()=>{toastware.addToast("Test toast 1 ds","error","top-left")}}>Toast - Top Left </button>
        <button onClick={()=>{toastware.addToast("Test toast 2vx","success","top-right")}}>Toast - Top Right </button>
        <button onClick={()=>{toastware.addToast("Test  3","warning","bottom-left")}}>Toast - Bottom Left </button>
        <button onClick={()=>{toastware.addToast("Test toast 4","info","bottom-right")}}>Toast - Bottom Right </button>
        <button onClick={()=>{toastware.success("Test toast 4","bottom-right")}}>Toast - success - Bottom Right </button>
        <button onClick={()=>{toastware.promise(fetchUser(2),{
          loading :"fetching...",
          success:"fetch data successfully",
          error :"Error while fetching..."
        })}}>Toast - promise  </button>



    </div>
  )
}