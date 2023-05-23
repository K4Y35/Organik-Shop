import React from "react";
import "./BgImgCard.css";

const BgImgCard = ({ background, subText, text }) => {
  return (
    <div className={`bgimgcard-div ${background}`}>
      <h3 className="fancy-text-white">{subText}</h3>
      <h1 className="bgimgcard-text">
        {text.split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </h1>
    </div>
  );
};

export default BgImgCard;
