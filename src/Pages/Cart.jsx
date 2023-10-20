import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Navbar from "../../Component/Navbar/Navbar";
import { getstoredBooking } from "../../Utility/LocalStorage";
import DashboardCard from "./DashboardCard";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
    const events = useLoaderData();
    const [eventBooked, setEventBooked] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const storedBookingIds = getstoredBooking();
        if (events.length > 0) {
            const bookedEvent = [];
            let calculatedTotalPrice = 0;
            for (const id of storedBookingIds) {
                const event = events.find((event) => event.id === id);
                if (event) {
                    bookedEvent.push(event);
                    calculatedTotalPrice += parseInt(event.price); // Convert price to integer and add to total
                }
            }
            setEventBooked(bookedEvent);
            setTotalPrice(calculatedTotalPrice);
        }
    }, [events]);

    const handleCardDelete = (deletedEventId, deletedEventPrice) => {
        setEventBooked((prevEventBooked) =>
            prevEventBooked.filter((event) => event.id !== deletedEventId)
        );
        setTotalPrice((prevTotalPrice) =>
            prevTotalPrice - parseInt(deletedEventPrice) // Subtract the event price as an integer
        );
    };

    const handleDeleteAll = () => {
        setEventBooked([]);
        setTotalPrice(0);
        localStorage.removeItem('Event-Booking');
    };

    return (
        <div>
            <Helmet>
                <title>
                    FestiveFusion | Dashboard
                </title>
            </Helmet>
            <Navbar />
            <div>
                <div className="">
                    <img
                        className="h-[500px] w-full"
                        src="https://i.ibb.co/KhGmqwp/bruno-kelzer-Lvy-SG1hvuz-I-unsplash.jpg"
                        alt=""
                    />
                </div>
                {eventBooked.length > 0 && (
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="font-bold">Total Price: ${totalPrice}</p>
                        </div>
                        <button
                            onClick={handleDeleteAll}
                            className="bg-red-500 text-white rounded px-2 py-1 my-2 ml-2"
                        >
                            Delete All
                        </button>
                    </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {eventBooked.length === 0 ? (
                        <p className="text-center text-purple-500 text-4xl col-span-3 py-10">
                            No Booking Events
                        </p>
                    ) : (
                        eventBooked.map((event) => (
                            <DashboardCard
                                event={event}
                                key={event.id}
                                onDelete={handleCardDelete}
                            />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
