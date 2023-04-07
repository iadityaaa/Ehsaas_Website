import React from "react";
// import "./Home.css";
import ContactUs from "../components/ContactUs";
import Events from "../components/Events";
import Footer from "../components/Footer";
import Intro from "../components/Intro";
import Videos from "../components/Videos";
// import AboutUs from "../components/aboutUs";
import ImageGallery from "../components/ImageGallery";
import Team from "../components/Team";
import EventsConducted from "../components/EventsConducted";

const Home = ({ auth }) => {
  return (
    <div>
      <Intro />
      {/* <AboutUs /> */}
      <EventsConducted />
      <Events auth={auth} />
      <Videos />
      <ImageGallery />
      <Team />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
