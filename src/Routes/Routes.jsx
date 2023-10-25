import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import AddProductes from "../Pages/AddProductes";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ShowBrandProductes from "../Pages/ShowBrandProductesDetails/ShowBrandProductes";
import BrandDetails from "../Pages/ShowBrandProductesDetails/BrandDetails";
import Cart from "../Pages/Cart";
import UpdateProduct from "../Pages/UpdateProduct";
import PrivateRoute from "./PrivateRoute";




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
                path:'/details/:id',
                element:<PrivateRoute><BrandDetails></BrandDetails></PrivateRoute> ,
                loader: ({params}) => fetch(`https://technology-and-electronic-server-fh0xgd40a.vercel.app/product/${params.id}`)
            },
            {
                path: '/branddetails/:id',
                element: <ShowBrandProductes></ShowBrandProductes>,
                loader: ()=> fetch('https://technology-and-electronic-server-fh0xgd40a.vercel.app/product')
            },
            {
                path: '/addproductes',
                element: <PrivateRoute><AddProductes></AddProductes></PrivateRoute>,
            },
            {
                path: '/update/:id',
                element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
                loader: ({params}) => fetch(`https://technology-and-electronic-server-fh0xgd40a.vercel.app/product/${params.id}`)
            },
            {
                path: '/cart',
                element: <PrivateRoute><Cart></Cart></PrivateRoute>,
                loader: ()=> fetch('https://technology-and-electronic-server-fh0xgd40a.vercel.app/cart')
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