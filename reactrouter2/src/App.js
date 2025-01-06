import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";

const router = createBrowserRouter(
  [
    {
      path:"/",
      element: 
      <div>
        <Navbar/>
        <Home/>
      </div>
    },
    {
      path:"/about",
      element: 
      <div>
        <Navbar/>
        <About/>
      </div>
    },
    {
      path:"/contact",
      element:
      <div>
        <Navbar/>
        <Contact/>
      </div>
    },
    {
      path:"/dashboard",
      element:
      <div>
        <Navbar/>
        <Dashboard/>
      </div>
    },
  ]
)


function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
