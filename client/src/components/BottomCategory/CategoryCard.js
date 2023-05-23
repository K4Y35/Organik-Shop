import React from "react";
import "./CategoryCard.css";
const CategoryCard = ({style}) => {
  return (
    <div className="CategoryCard" style={style}>
      <button className="simple-button-white">Organic Juice</button>
    </div>
  );
};

export default CategoryCard;
