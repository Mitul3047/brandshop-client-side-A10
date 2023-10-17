import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";



const router = createBrowserRouter([
    {
        path: '/',
        // errorElement: <Error></Error>,
        element: <MainLayout></MainLayout>,
        children: [
           
        ]
    }
])
export default router;