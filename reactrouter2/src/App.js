import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import ParamComp from "./components/ParamComp";
import Child1 from "./components/children/Child1";
import Child2 from "./components/children/Child2";
import Child3 from "./components/children/Child3";
import Error from "./components/error/Error";

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
      </div>,
      children:[
        {
          path:"child1",
          element:
            <Child1/>
        },
        {
          path:"child2",
          element:
            <Child2/>
        },
        {
          path:"child3",
          element:
            <Child3/>
        },
      ]
    },
    {
      path:"/student/:id", //this is a route parameter
      element:
      <div>
        <Navbar/>
        <ParamComp/>
      </div>
    },
    {
      path:"*",
      element:
      <Error/>
    }
    
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
