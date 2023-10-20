import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import AddProductes from "../Pages/AddProductes";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ShowBrandProductes from "../Pages/ShowBrandProductesDetails/ShowBrandProductes";




const router = createBrowserRouter([
    {
        path: '/',
        // errorElement: <Error></Error>,
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/branddetails/:id',
                element: <ShowBrandProductes></ShowBrandProductes>,
                loader: ()=> fetch('http://localhost:3000/product')
            },
            {
                path: '/addproductes',
                element: <AddProductes></AddProductes>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    }
])
export default router;