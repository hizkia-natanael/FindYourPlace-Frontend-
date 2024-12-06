import React from "react";

const Card = ({ image, name, alt }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-transform duration-300">
      <img src={image} alt={alt} className="w-full h-52 object-cover" />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
      </div>
    </div>
  );
};

export default Card;
