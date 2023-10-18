import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import NavBar from "../Components/NavBar/NavBar";


const MainLayout = () => {
    return (
        <div className="max-w-[1440px] mx-auto">
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default MainLayout;