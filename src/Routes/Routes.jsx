import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root";
import Home from "../Pages/Home";
import SignUp from "../Components/SignUp";
import SignIn from "../Components/SignIn";

export const router=createBrowserRouter(
    [
        {
            path:'/',
            Component:Root,
            children:[
                {
                    index:true,
                    loader:()=>fetch('/plants.json'),
                    Component:Home
                },
                {
                    path:'/signup',
                    Component:SignUp
                },
                {
                    path:'signin',
                    Component:SignIn

                }
            ]
        }
    ]
)