import { useState } from "react";
import { useLoaderData } from "react-router-dom";
// import BrandCard from "../../Components/Brands/BrandsCard";
import BrandProductesCard from "./BrandProductesCard";


const BrandProductesCards = () => {
    const loadedCoffees = useLoaderData();
    const [productes, setProductes] = useState(loadedCoffees);
  
    return (
      <>
        
        <h1 className="text-pink-600 text-6xl text-center py-10">Coffee Store</h1>
  
        <h1 className='text-6xl text-center my-20 text-purple-600'>Hot Hot Cold Coffee: {productes.length}</h1>
        <div className='grid md:grid-cols-3 gap-4'>
          {
            productes.map(product => <BrandProductesCard
              key={product._id}
              product={product}
              productes={productes}
              setProductes={setProductes}
            ></BrandProductesCard>)
          }
        </div>
        
      </>
    );
};

export default BrandProductesCards;