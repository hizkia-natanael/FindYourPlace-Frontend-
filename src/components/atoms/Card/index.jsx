import React from "react";

const Card = ({ image, name, alt, address, key }) => {
  return (
    <div
      className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-transform duration-300"
      key={key}
    >
      <img src={image} alt={alt} className="w-full h-52 object-cover" />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-coklate">{name}</h3>
        <p className="text-sm font-semibold text-gray-800">{address}</p>
      </div>
    </div>
  );
};

export default Card;
