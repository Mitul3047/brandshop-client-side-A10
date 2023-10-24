import Brands from "../Components/Brands/Brands";
import HotDeals from "../Components/HotDeals/HotDeals";


const Home = () => {
    return (
        <div>
            <img className="h-[80hv]" src="https://i.ibb.co/S6k9Hnf/Black-and-Red-Modern-Technology-Promotion-Banner-Landscape-1.jpg" alt="" />
            <Brands></Brands>
            <HotDeals></HotDeals>
        </div>
    );
};

export default Home;