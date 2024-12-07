import React from "react";
import { Card } from "../../atoms";

const RatingSection = ({ image, name }) => {
  return (
    <div className="">
      <div className="">
        <Card image={image} name={name} />
      </div>
    </div>
  );
};

export default RatingSection;
