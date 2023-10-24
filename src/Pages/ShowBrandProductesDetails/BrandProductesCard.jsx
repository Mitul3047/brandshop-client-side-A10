import PropTypes from "prop-types";
// import { useEffect, useState } from "react";
import { BsFillStarFill } from 'react-icons/Bs';
import { Link } from "react-router-dom";
const BrandProductesCard = ({ product }) => {
  const { _id, name, brand_name, type, price, description, rating, photo } = product;



  return (
    <div className="card  bg-gray-100 shadow-xl">
      <img className="h-[300px] w-[full] rounded-t-lg" src={photo} alt="Shoes" />
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <p className="flex flex-row items-center gap-2 "><span className="inline-block text-yellow-600"><BsFillStarFill></BsFillStarFill></span>{rating}</p>
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


