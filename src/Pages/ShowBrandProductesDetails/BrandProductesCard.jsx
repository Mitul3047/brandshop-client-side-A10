import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { BsStar } from 'react-icons/bs'
import { Link } from "react-router-dom";
const BrandProductesCard = ({ product }) => {
  const { _id, name, brand_name, type, price, description, rating, photo } = product;
  const [Brands, setBrands] = useState('')
  useEffect(() => {
    fetch('/../brand.json')
      .then((response) => response.json()) // Invoke json method
      .then((data) => setBrands(data))
      .catch((error) => console.error(error)); // Add error handling
  }, []);
  console.log(Brands);

  return (
    <div className="card  bg-base-100 shadow-xl">
      <img className="h-[300px] w-[full] rounded-t-lg" src={photo} alt="Shoes" />
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="flex justify-between items-center flex-row gap-2"><span className="text-yellow-500 inline-block"><BsStar></BsStar></span>{rating}</div>
        </h2>

        <div className="card-actions justify-start">
          <div className="badge badge-outline">{brand_name}</div>
          <div className="badge badge-outline">{type}</div>
        </div>
        <p>{description}</p>
        <h2>${price}</h2>
        <div className="btn-group justify-evenly">
        <Link to={`/details/${_id}`}>
        <button className="btn ">Details</button>
        </Link>
        <Link to = {`/update/${_id}`}>
        <button className="btn">Update</button>
        </Link>
      </div>
      </div>
      
    </div>
  );
};

BrandProductesCard.propTypes = {
  product: PropTypes.object
};

export default BrandProductesCard;
