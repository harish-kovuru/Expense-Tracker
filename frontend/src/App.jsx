import { createBrowserRouter, RouterProvider } from "react-router-dom" 
import Home from "./components/Home"
import Login from "./components/Login"
import Signup from "./components/Signup"
import { Toaster } from "@/components/ui/sonner"

const approuter = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/signup",
    element:<Signup/>
  }
])
function App() {
  return (
    <div >
      <RouterProvider router= {approuter}/>
      <Toaster/>
    </div>
  )
}

export default App
