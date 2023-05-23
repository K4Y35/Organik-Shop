import React from "react";
import { BsFillArrowRightCircleFill, BsFillPersonFill } from "react-icons/bs";
import "./ImageBackOverlayedCard.css";

const ImageBackOverlayedCard = ({ style, mainTitle }) => {
  return (
    <div className="ImageBackOverlayedCard" style={style}>
      <div className="rounded-date">
        <h3>25</h3>
        <h3>Nov</h3>
      </div>
      <div className="overlayed-card">
        <div className="author">
          <BsFillPersonFill className="icon-color-golden" />
          <h6 className="author-name">By Rachi Card</h6>
        </div>
        <h3 className="overlayed-main-text">{mainTitle}</h3>
        <p className="secondary-text">
          Simply dummy text of the printing and typesetting <br /> industry.
          Lorem Ipsum
        </p>
        <button className="btn-yellow-lg overlayed-card-margin">
          Read More
          <BsFillArrowRightCircleFill className="btn-icon" />
        </button>
      </div>
    </div>
  );
};

export default ImageBackOverlayedCard;
