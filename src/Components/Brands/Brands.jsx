import { useEffect } from "react";
import { useState } from "react";

import BrandsCard from "./BrandsCard";


const BrandCards = () => {
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        fetch('brand.json')
            .then(r => r.json())
            .then(data => setBrands(data));
    }, [])
    return (
        <div className="text-center py-32">
            <h2 className="text-slate-500 text-4xl">Popular Brands</h2>
            <p className="text-center py-10 text-gray-500 mx-auto w-4/5">
                A website section showcasing popular brand products is a virtual emporium of excellence, where renowned brands' finest offerings converge. This curated space provides shoppers with an array of premium products, spanning fashion, electronics, cosmetics, and more. These brands have earned a distinguished reputation for quality, innovation, and consistency. This section offers a window into the ever-evolving world of consumer preferences, displaying the latest releases and enduring favorites. It's a one-stop destination for consumers seeking trust and quality in their purchases, ensuring they stay attuned to the market's pulse. Whether it's luxury, durability, cutting-edge tech, or style, this section delivers a rich palette of brand-driven options.
            </p>

            <div data-aos="flip-left" className="grid p-4 w-3/4 mx-auto  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    brands?.map(event => (
                        <BrandsCard key={event.id}
                            event={event}>
                        </BrandsCard>
                    ))
                }
            </div>
        </div>
    );
};

export default BrandCards;