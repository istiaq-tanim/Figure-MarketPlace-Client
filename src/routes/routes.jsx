import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Register/Login";
import Register from "../Pages/Register/Register";
import Blogs from "../Pages/Blogs/Blogs";
import PrivateRoutes from "./PrivateRoutes";
import SingleToy from "../Pages/SingleToy/SingleToy";
import AddToy from "../Pages/AddToy/AddToy";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/login",
            element:<Login></Login>
        }
        ,{
            path:"/register",
            element:<Register></Register>
        },
        {
          path:"/blogs",
          element:<PrivateRoutes><Blogs></Blogs></PrivateRoutes>
        },
        {
          path:"toy/:id",
          element:<PrivateRoutes><SingleToy></SingleToy></PrivateRoutes>,
          loader:({params})=>fetch(`http://localhost:5000/toy/${params.id}`)
        },
        {
          path:"/addToy",
          element:<AddToy></AddToy>,
        }
      ]
    },
  ])
  export default router