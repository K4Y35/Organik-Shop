import React from "react";
import { AiFillStar } from "react-icons/ai";
import customerImg from "../../resources/customer.jpg";
import "./Testimonial.css";

const Testimonial = () => {
  return (
    <section className="testimonial-section">
      <h2 className="fancy-text">Testimonial</h2>
      <h2 className="our-cutomer-text">What Our Customer Saying?</h2>
      <div className="customer-image-div">
        <img src={customerImg} alt="" className="circle-img" />
        <div className="star-div">
          <AiFillStar className="star-color" />
          <AiFillStar className="star-color" />
          <AiFillStar className="star-color" />
          <AiFillStar className="star-color" />
          <AiFillStar className="star-color" />
        </div>
      </div>
      <p className="secondary-text">
        Simply dummy text of the printing and typesetting industry. Lorem Ipsum
        simply dummy
        <br /> text of the printing and typesetting industry. Lorem Ipsum has
        been.
      </p>
      <h3 className="main-text margin">Sara Tylor</h3>
      <h6 className="secondary-text">Consumer</h6>
      <div className="testimonial-divider"></div>
      <div className="testimonial-circle">
        <div className="circle-div">
          <h1 className="main-text circle-main-text">100%</h1>
          <h3 className="main-text circle-secondary-text">Organic</h3>
        </div>
        <div className="circle-div">
          <h1 className="main-text circle-main-text">285</h1>
          <h3 className="main-text circle-secondary-text">Active Product</h3>
        </div>
        <div className="circle-div">
          <h1 className="main-text circle-main-text">350+</h1>
          <h3 className="main-text circle-secondary-text">Organic Orchads</h3>
        </div>
        <div className="circle-div">
          <h1 className="main-text circle-main-text">25+</h1>
          <h3 className="main-text circle-secondary-text">Years of Farming</h3>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
