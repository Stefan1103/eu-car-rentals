import Navbar from "../components/Header/Navbar";
import Banner from "../components/Header/Banner";
import Booking from "../components/Booking/Booking";
import Advert from "../components/Advert/Advert";
import RentalFleet from "../components/RentalFleet/RentalFleet";
import Testimonials from "../components/Testimonials/Testimonials";
import Faq from "../components/Faq/Faq";
import Footer from "../components/Footer/Footer";
import { useState } from "react";

const Home = () => {
  const [selectedVehicle, setSelectedVehicle] = useState<number | undefined>(
    undefined,
  );
  return (
    <>
      <Navbar />
      <Banner />
      <Advert />
      <Booking
        setSelectedVehicle={setSelectedVehicle}
        selectedVehicle={selectedVehicle}
      />
      <RentalFleet setSelectedVehicle={setSelectedVehicle} />
      <Testimonials />
      <Faq />
      <Footer />
    </>
  );
};

export default Home;
