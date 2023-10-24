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
                element:<BrandDetails></BrandDetails> ,
                loader: ({params}) => fetch(`https://technology-and-electronic-server-fh0xgd40a.vercel.app/product/${params.id}`)
            },
            {
                path: '/branddetails/:id',
                element: <ShowBrandProductes></ShowBrandProductes>,
                loader: ()=> fetch('https://technology-and-electronic-server-fh0xgd40a.vercel.app/product')
            },
            {
                path: '/addproductes',
                element: <AddProductes></AddProductes>,
            },
            {
                path: '/update/:id',
                element: <UpdateProduct></UpdateProduct>,
                loader: ({params}) => fetch(`https://technology-and-electronic-server-fh0xgd40a.vercel.app/product/${params.id}`)
            },
            {
                path: '/cart',
                element: <Cart></Cart>,
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