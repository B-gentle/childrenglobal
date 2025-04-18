import React, { useEffect } from "react";
import HeroSection from "../components/HomePage/heroSection/HeroSection";
import Services from "../components/HomePage/services/Services";
import AboutUs from "../components/HomePage/aboutUs/AboutUs";
import Contact from "../components/HomePage/contact/Contact";
import Events from "../components/HomePage/events/Events";
import Blog from "../components/HomePage/blog/Blog";
import { blogs } from "../data";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const preview = blogs.slice(0, 3);
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <Services />
      <Events />
      <Blog preview={preview} />
      <Contact plainText="Looking for a charity to support? Contact us to make inquires and become a volunteer helping others." />
    </div>
  );
};

export default Home;
