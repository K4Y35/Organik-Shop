import React from "react";
import "./Subscribe.css";

const Subscribe = () => {
  return (
    <section className="subscribe-section">
      <h1 className="newletter-main-text">
        Subscibe to <br /> our Newsletter
      </h1>
      <div className="emailandbutton">
        <input type="email" placeholder="Your Email Address" className="mail-input"/>
        <button className="normal-btn-green">Subscribe</button>
      </div>
    </section>
  );
};

export default Subscribe;
