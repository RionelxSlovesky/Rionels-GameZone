import { createBrowserRouter } from "react-router-dom";
import Main from "../Pages/Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Authentication/Login/Login";
import Registration from "../Pages/Authentication/Registration/Registration";
import AuthRoute from "./AuthRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <AuthRoute><Login></Login></AuthRoute>
            },
            {
                path: '/register',
                element: <AuthRoute><Registration></Registration></AuthRoute>
            }
        ]
    }
])

export default router
