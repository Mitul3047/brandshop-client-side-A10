import Brands from "../Components/Brands/Brands";
import HotDeals from "../Components/HotDeals/HotDeals";


const Home = () => {
    return (
        <div>
            <img className="h-[80hv]" src="https://i.ibb.co/S6k9Hnf/Black-and-Red-Modern-Technology-Promotion-Banner-Landscape-1.jpg" alt="" />
            <Brands></Brands>
            <HotDeals></HotDeals>
            <img className="pb-28 w-3/4 mx-auto" src="https://i.ibb.co/j3q495P/Black-Simple-Watch-Promotion-Advert-Web-Banner-1.jpg" alt="" />
        </div>
    );
};

export default Home;