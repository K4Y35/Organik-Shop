import React from "react";
import NavBar from "../components/NavBar/NavBar";
import BottomCategory from "./../components/BottomCategory/BottomCategory";
import EconFriendly from "./../components/EcoFriendly/EconFriendly";
import Footer from "./../components/Footer/Footer";
import FourProductSection from "./../components/FourProductSection/FourProductSection";
import HeroBanner from "./../components/HeroBanner/HeroBanner";
import LeftImageCard from "./../components/LeftImageCard/LeftImageCard";
import News from "./../components/News/News";
import Products from "./../components/Products/Products";
import Subscribe from "./../components/Subscribe/Subscribe";
import Testimonial from "./../components/Testimonial/Testimonial";
import ShowOffer from "./../components/bgImageCard/ShowOffer";

function Home() {
  return (
    <>
      <NavBar />
      <HeroBanner />
      <ShowOffer />
      <LeftImageCard />
      <Products />
      <Testimonial />
      <FourProductSection />
      <EconFriendly />
      <BottomCategory />
      <News />
      <Subscribe />
      <Footer />
    </>
  );
}

export default Home;
