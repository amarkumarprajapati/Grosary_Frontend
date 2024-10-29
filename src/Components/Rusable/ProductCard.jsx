import React from "react";

const ProductCard = ({ title, price, image }) => {
  return (
    <div className="p-2">
      <div className="bg-white shadow-lg rounded-lg p-2 hover:shadow-xl transition-shadow duration-300">
        <img
          src={image}
          alt={title}
          className="w-full h-32 object-cover rounded-md mb-2" 
        />
        <h3 className="text-md font-semibold">{title}</h3> {/* Adjust font size here */}
        <p className="text-gray-600 text-sm">{price}</p> {/* Adjust font size here */}
      </div>
    </div>
  );
};

export default ProductCard;
