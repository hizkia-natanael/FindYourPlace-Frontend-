import React from "react";

const Card = ({ image, title }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
      <img
        src="https://images.unsplash.com/photo-1658585789455-88af58511272?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="w-full h-32 md:h-40 object-cover"
      />
      <p className="text-center text-black text-sm md:text-base font-semibold py-2">
        watu langit jogja cafe
      </p>
    </div>
  );
};

export default Card;
