import React from "react";
import { Card } from "../../atoms";

const RatingSection = () => {
  const cards = [
    { image: "image-link.jpg", title: "Watu Langit Jogja Cafe" },
    { image: "image-link.jpg", title: "Watu Langit Jogja Cafe" },
    { image: "image-link.jpg", title: "Watu Langit Jogja Cafe" },
    { image: "image-link.jpg", title: "Watu Langit Jogja Cafe" },
  ];

  return (
    <div className="p-4">
      <h2 className="text-xl md:text-2xl font-bold text-orange-600 mb-4">
        Rating Bagus
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {cards.map((card, index) => (
          <Card key={index} image={card.image} title={card.title} />
        ))}
      </div>
    </div>
  );
};

export default RatingSection;
