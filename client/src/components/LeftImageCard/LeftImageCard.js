import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import appleinbowl from "../../resources/appleinbowlIcon.png";
import standardsImg from "../../resources/boxwithBadgeicon.png";
import "./LeftImageCard.css";

const LeftImageCard = () => {
  return (
    <section className="LeftImageCard-section">
      <div className="leftImageCard-content-div">
        <h3 className="fancy-text">About Us</h3>
        <h5 className="leftimagecard-hero-text">
          We Believe in Working <br /> Accredited Farmers
        </h5>
        <h6 className="secondary-text">
          Simply dummy text of the printing and typesetting industry. Lorem had
          ceased to <br />
          been the industry's standard dummy text ever since the 1500s, when an
          unknown <br />
          printer took a galley.
        </h6>
        <div className="left-image-small-card">
          <div className="small-card-img">
            <img src={appleinbowl} alt="" />
          </div>
          <div className="left-image-small-card-content">
            <h3 className="main-text">Organic Foods Only</h3>
            <h6 className="secondary-text">
              Simply dummy text of the printing and typesetting <br /> industry.
              Lorem Ipsum
            </h6>
          </div>
        </div>
        <div className="left-image-small-card left-image-small-card-content">
          <div className="small-card-img">
            <img src={standardsImg} alt="" />
          </div>
          <div>
            <h3 className="main-text">Quality Standards</h3>
            <h6 className="secondary-text">
              Simply dummy text of the printing and typesetting <br /> industry.
              Lorem Ipsum
            </h6>
          </div>
        </div>
        <button className="btn-green">
          Shop Now
          <BsFillArrowRightCircleFill className="btn-icon" />
        </button>
      </div>
    </section>
  );
};

export default LeftImageCard;
