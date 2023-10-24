

const HotDeals = () => {
    return (
        <div className="space-y-10 w-3/4 mx-auto mb-20">
            <h2 className="text-5xl  text-center text-slate-500">Hot Deals</h2>
            <div className="flex items-center justify-evenly gap-4">
                <img className=" rounded-lg mx-auto w-1/2 h-[500px]" src="https://i.ibb.co/RY7wPyq/Purple-and-White-Modern-Gadget-Sale-Instagram-Post.jpg" alt="" />
                <p className="w-4/5 mx-auto text-justify">Introducing our latest mobile device, a technological masterpiece that combines innovation, style, and functionality in the palm of your hand. Our new mobile phone, available on our website, redefines the way you stay connected and experience the digital world.

                    With a sleek and modern design, this mobile device is not just a communication tool; it's a fashion statement. Its cutting-edge features include a high-resolution display, powerful processors, and a versatile camera system that captures life's moments with stunning clarity. Whether you're a social media enthusiast, a mobile gamer, or a professional on the go, this mobile phone has the capabilities to meet your needs.
                </p>
            </div>

            <div className="flex items-center flex-row md:flex-row-reverse  justify-evenly gap-4">
                <img className="rounded-lg mx-auto w-1/2 h-[500px]" src="https://i.ibb.co/LCxxC6x/Black-White-Futuristic-Watch-Promotion-Offer-Your-Story.png" alt="" />

                <p className="w-4/5 mx-auto text-justify" >Elevate your wrist game with our latest collection of timepieces, now available at unbeatable prices on our website. These watches are a testament to the art of horology, seamlessly blending style and innovation while offering affordability that suits every budget.

                    Whether you're in search of a classic dress watch to adorn your wrist at formal events or a rugged sport watch for your adventurous escapades, our collection caters to all tastes and needs. With our ongoing sale, you can access these exquisite timekeepers with significant discounts, making it the perfect time to invest in a high-quality watch.

                    Our latest watches feature cutting-edge technology, such as smartwatch connectivity, precision chronographs, and robust water resistance, ensuring you're not just accessorizing but also enhancing your daily life with practicality.

                </p>
            </div>

        </div>
    );
};

export default HotDeals;