import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import "./HeroBanner.css";

const HeroBanner = () => {
  return (
    <section className="hero">
      <div className="hero-content-div">
        <h3 className="fancy-text">100% Natural Food</h3>
        <h1 className="hero-text">
          Choose the best
          <br /> healthier way <br /> of life
        </h1>
        <button className="btn-yellow-lg">
          Explore now <BsFillArrowRightCircleFill className="btn-icon" />
        </button>
      </div>
    </section>
  );
};

export default HeroBanner;
