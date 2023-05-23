import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import tomatoesbackground from "../../resources/tomatoFull.png";
import ImageBackOverlayedCard from "./ImageBackOverlayedCard";
import "./News.css";

const News = () => {
  const backgroundImgCard = {
    backgroundImage: `url(${tomatoesbackground})`,
  };
  return (
    <section className="news-section">
      <div className="FourProductSection-title">
        <div>
          <h3 className="fancy-text">Offer</h3>
          <h1 className="discover-text">
            Discover weekly content about <br /> organic food, & more
          </h1>
        </div>
        <button className="btn-outlined">
          More News
          <BsFillArrowRightCircleFill className="btn-icon" />
        </button>
      </div>
      <div className="overlayedcard-div">
        <ImageBackOverlayedCard
          mainTitle={"The Benefits of Vitamin D & How to Get It"}
        />
        <ImageBackOverlayedCard
          style={backgroundImgCard}
          mainTitle={"Our Favourite Summertime Tommeto"}
        />
      </div>
    </section>
  );
};

export default News;
