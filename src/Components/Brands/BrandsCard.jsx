import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const BrandCard = ({ event: brand }) => {
    const { id, brand_image, brand_name } = brand;



    return (

        <Link to={`/branddetails/${brand_name}`}>
            <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                <img
                    src={brand_image}
                    className="h-full w-full object-cover"
                    alt={brand_name}
                />
            </div>
            <div className="p-6">
                <div className="mb-2">
                    <p className="font-sans text-base font-medium text-blue-gray-900 antialiased">
                        {brand_name}
                    </p>
                </div>
            </div>

        </Link>

    );
};

export default BrandCard;

BrandCard.propTypes = {
    event: PropTypes.object
}
