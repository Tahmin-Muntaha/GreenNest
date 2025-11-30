import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root";
import Home from "../Pages/Home";
import SignUp from "../Components/SignUp";
import SignIn from "../Components/SignIn";
import PlantDetails from "../Components/PlantDetails";
import Profile from "../Pages/Profile";
import Plantss from "../Pages/Plantss";

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
                    path:'/signin',
                    Component:SignIn

                },
                {
                    path:'/details/:plantId',
                    loader:()=>fetch('/plants.json'),
                    Component:PlantDetails
                },
                {
                    path:'/profile',
                    Component:Profile
                },
                {
                    path:'plants',
                    loader:()=>fetch('/plants.json'),
                    Component:Plantss

                }
            ]
        }
    ]
)