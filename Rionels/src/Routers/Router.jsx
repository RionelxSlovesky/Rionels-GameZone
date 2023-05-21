import { createBrowserRouter } from "react-router-dom";
import Main from "../Pages/Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Authentication/Login/Login";
import Registration from "../Pages/Authentication/Registration/Registration";
import AuthRoute from "./AuthRoute";
import Blog from "../Pages/Blog/Blog";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AddAToy from "../Pages/AddAToy/AddAToy";
import PrivateRoute from "./PrivateRoute";
import AllToys from "../Pages/AllToys/AllToys";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";
import MyToys from "../Pages/MyToys/MyToys";

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
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/addAToy',
                element: <PrivateRoute><AddAToy></AddAToy></PrivateRoute>
            },
            {
                path: '/toys',
                element: <AllToys></AllToys>,
                loader: () => fetch('http://localhost:5000/toys')
            },
            {
                path: '/toys/:id',
                element: <ToyDetails></ToyDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/toys/${params.id}`)
            },
            {
                path: '/mytoys',
                element: <MyToys></MyToys>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])

export default router
