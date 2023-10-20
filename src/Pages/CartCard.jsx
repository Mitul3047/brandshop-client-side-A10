import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const DashboardCard = ({event}) => {
    const {id,name, card_img,description} = event;
    return (
        <div className="relative flex  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                <img
                    src={card_img}
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="p-6">
                <div className="mb-2 flex items-center justify-between">
                    <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                        {name}
                    </p>
                    
                </div>
                <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                    {description}
                </p>
            </div>
            <div className="p-6 pt-0">
                <Link to={`/eventdetails/${id}`}>
                    <button
                        className="block w-full select-none rounded-lg btn bg-purple-500 text-white"
                        type="button"
                    >
                        Event Details
                    </button>
                </Link>
            </div>
        </div>
       
    );
};

export default DashboardCard;

DashboardCard.propTypes={
    event: PropTypes.object
}