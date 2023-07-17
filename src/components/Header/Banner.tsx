import React from "react";
import GradeIcon from "@mui/icons-material/Grade";
import bannerImg from "../../assets/img/banner_car.jpg";

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-left">
        <h1>
          <span>
            <GradeIcon />
          </span>
          Eu-Car-rentals
        </h1>
        <p>
          The most reliable rental company in the european union. we operate in
          multiple eu countries and have a good range of vehicles for all
          tastes.
        </p>
        <div className="btn-banner-container">
          <button className="btn-primary">Learn more</button>
          <button className="btn-secondary">Reserve</button>
        </div>
      </div>
      <div className="banner-right">
        <img
          src={bannerImg}
          alt="image of a blue car for the rental company."
        ></img>
      </div>
    </section>
  );
};

export default Banner;
