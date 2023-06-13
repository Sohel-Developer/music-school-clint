import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import NotFound from "../pages/NotFound/NotFound";
import AllUsers from "../Pages/Dashbord/AllUsers/AllUsers";
import DashBordLayout from "../Layout/DashBordLayout";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import AddClass from "../pages/Dashbord/AddClass/AddClass";
import MyClasses from "../pages/Dashbord/MyClasses/MyClasses";
import ManagesClasses from "../pages/Dashbord/ManagesClasses/ManagesClasses";
import AllClass from "../pages/AllClass/AllClass";
import SelectedClasses from "../pages/Dashbord/SelectedClasses/SelectedClasses";

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
                path: '/allclass',
                element: <AllClass />
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
        element: <PrivateRoute><DashBordLayout /></PrivateRoute>,
        children: [
            {
                path: 'users',
                element: <AdminRoute><AllUsers /></AdminRoute>
            },
            {
                path: 'manages',
                element: <AdminRoute><ManagesClasses /></AdminRoute>
            },
            {
                path: 'addclass',
                element: <AddClass />
            },
            {
                path: 'selected',
                element: <SelectedClasses />
            },
            {
                path: 'classes',
                element: <MyClasses />
            }

        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
]);