import React from "react";
import BgImgCard from "./BgImgCard";
import "./BgImgCard.css";

const ShowOffer = () => {
  return (
    <section className="offer-section">
      <BgImgCard subText={"natural!!"} text={"Get Garden \n Fresh Fruits"} />
      <BgImgCard
        background={"apple-background"}
        subText={"offer!!"}
        text={"Get 10% off\non Vegetables"}
      />
    </section>
  );
};

export default ShowOffer;
