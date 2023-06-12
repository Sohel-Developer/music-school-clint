import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import NotFound from "../pages/NotFound/NotFound";
import AllUsers from "../Pages/Dashbord/AllUsers/AllUsers";
import DashBordLayout from "../Layout/DashBordLayout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'signup',
                element: <SignUp />
            }
        ]
    },
    {
        path: 'dashbord',
        element: <DashBordLayout />,
        children: [
            {
                path: 'users',
                element: <AllUsers />
            }
        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
]);