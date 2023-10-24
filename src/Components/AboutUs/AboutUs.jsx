

const AboutUs = () => {
    return (
        <div>
             <img className="h-[450px] w-full" src="https://i.ibb.co/CzGZdSd/tyler-nix-sh3-LSNbyj7k-unsplash.jpg" alt="" />
            <div >
                <h2 className=" text-center text-5xl font-medium">Welcome to <span className="text-purple-500 italic">FestiveFusion</span> <br />
                    Where Moments Become Memories!</h2>
                <p className=" text-center w-4/6 mx-auto text-gray-500 font-light py-10 text-lg">At FestiveFusion, we are passionate about creating unforgettable experiences. We understand the significance of every social event in your life, whether it&rsquo;s a wedding, a birthday celebration, a corporate gathering, or any special occasion. That&rsquo;s why we are committed to turning your dreams into reality, one event at a time.</p>
                <div className="flex flex-col md:flex-row gap-4 my-10 md:gap-7 justify-center items-center">
                    <img className="w-80 rounded-2xl" src="https://i.ibb.co/Scj6Y4Y/tengku-nadia-fz8-SONk-BB8-unsplash.jpg" alt="" />
                    <div className="my-10 space-y-8 text-center">
                        <h2 className="text-5xl font-medium text-purple-500 ">Our Story</h2>
                        <div className="space-y-8">
                            <p className="text-xl">Founded in 2023, <span className="text-2xl italic font-medium text-purple-500">FestiveFusion</span> was born out of a shared love for celebrations and the desire to make each event a masterpiece. Our journey began with a small team of creative enthusiasts who believed in the power of impeccable planning, attention to detail, and exceptional customer service.</p>
                            <p className="text-xl">
                                Over the years, we have grown into a dynamic team of event planners, designers, and coordinators, each bringing a unique set of skills and experiences to the table. Our collective dedication to excellence has propelled us to become a trusted name in the event management industry.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;