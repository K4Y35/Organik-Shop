import React from "react";
import cookiesbackground from "../../resources/nutsCookies.jpg";
import organickBackground from "../../resources/organicFood.jpg";
import "./BottomCategory.css";
import CategoryCard from "./CategoryCard";
const BottomCategory = () => {
  const organicback = {
    backgroundImage: `url(${organickBackground})`,
  };
  const cookiesback = {
    backgroundImage: `url(${cookiesbackground})`,
  };
  return (
    <section className="BottomCategory-section">
      <CategoryCard />
      <CategoryCard style={organicback} />
      <CategoryCard style={cookiesback} />
    </section>
  );
};

export default BottomCategory;
