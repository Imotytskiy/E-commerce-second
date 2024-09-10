import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProducItem = ({ id, images = [], name, price }) => {
  // Default images to an empty array
  const { currency } = useContext(ShopContext);

  // Check if images is valid
  const imgSrc = images.length > 0 ? images[0] : "fallback-image-url"; // Replace with a fallback image URL

  return (
    <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
      <div className="overflow-hidden">
        <img className="pt-3 pb-1 text-sm" src={imgSrc} alt={name} />
      </div>
      <p className="pt-3 pb1 text-sm">{name}</p>
      <p className="text-sm font-medium">
        {price}
        {currency}
      </p>
    </Link>
  );
};

export default ProducItem;
