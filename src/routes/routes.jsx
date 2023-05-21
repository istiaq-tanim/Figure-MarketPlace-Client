import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Register/Login";
import Register from "../Pages/Register/Register";
import Blogs from "../Pages/Blogs/Blogs";
import PrivateRoutes from "./PrivateRoutes";
import AddToy from "../Pages/AddToy/AddToy";
import AllToys from "../Pages/AllToys/AllToys";
import SingleToyDetails from "../Pages/SingleToyDetails/SingleToyDetails";
import MyToys from "../Pages/MyToys/MyToys";
import UpdateToy from "../Pages/MyToys/UpdateToy";
import ErrorElement from "../Pages/ErrorPage/ErrorElement";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorElement></ErrorElement>,
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
          element:<Blogs></Blogs>
        },
        {
          path:"/addToy",
          element:<PrivateRoutes><AddToy></AddToy></PrivateRoutes>,
        },
        {
          path:"/allToys",
          element:<AllToys></AllToys>,
          
        },
        {
          path:"/singleToy/:id",
          element:<PrivateRoutes><SingleToyDetails></SingleToyDetails></PrivateRoutes>,
          loader:({params})=>fetch(`https://assignment-11-toy-market-server.vercel.app/singleToyDetails/${params.id}`)
        },
        {
          path:"/myToys",
          element:<PrivateRoutes><MyToys></MyToys></PrivateRoutes>,

        },
        {
          path:"/updateToy/:id",
          element:<PrivateRoutes><UpdateToy></UpdateToy></PrivateRoutes>,
          loader:({params})=>fetch(`https://assignment-11-toy-market-server.vercel.app/updateToy/${params.id}`)
        }
      ]
    },
  ])
  export default router