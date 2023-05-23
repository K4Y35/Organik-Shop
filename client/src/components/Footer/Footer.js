import React from "react";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook, BsPinterest } from "react-icons/bs";
import logo from "../../resources/Logo.svg";
import "./Footer.css";
const Footer = () => {
  return (
    <section className="footer-section">
      <div className="footer-div">
        <div className="col1">
          <h2 className="footer-title">Conatact Us</h2>
          <h5 className="field-name">Email</h5>
          <p className="field-info">needhelp@organia.com</p>
          <h5 className="field-name">Phone</h5>
          <p className=" field-info">666 888 888</p>
          <h5 className="field-name">Address</h5>
          <p className=" field-info">88 road borklyn street, USA</p>
        </div>
        <div className="col2">
          <img src={logo} alt="" className="footer-title" />
          <p className="footer-desc">
            Simply dummy text of the printing and typesetting industry.
            <br />
            Lorem Ipsum simply dummy text of the printing
          </p>
          <div className="footer-social">
            <div className="social-circle-div">
              <AiOutlineInstagram />
            </div>
            <div className="social-circle-div">
              <BsFacebook />
            </div>
            <div className="social-circle-div">
              <AiOutlineTwitter />
            </div>
            <div className="social-circle-div">
              <BsPinterest />
            </div>
          </div>
        </div>
        <div className="col3">
          <h2 className="footer-title">Utility Pages</h2>
          <h6 className="footer-pages">Style Guide</h6>
          <h6 className="footer-pages">404 Not Found</h6>
          <h6 className="footer-pages">Password Protected</h6>
          <h6 className="footer-pages">Licences</h6>
          <h6 className="footer-pages">Changelog</h6>
        </div>
      </div>
      <div className="copyright">
        <h5>Copyright © Organick | Designed by Online</h5>
      </div>
    </section>
  );
};

export default Footer;
