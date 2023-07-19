import React from "react";
import Navbar from "../components/Header/Navbar";
import Banner from "../components/Header/Banner";
import Booking from "../components/Booking/Booking";
import Advert from "../components/Advert/Advert";
import RentalFleet from "../components/RentalFleet/RentalFleet";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Advert />
      <Booking />
      <RentalFleet />
    </>
  );
};

export default Home;
