import React from "react";
import GradeIcon from "@mui/icons-material/Grade";
import bannerImg from "../../assets/img/banner_car.jpg";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-left">
        <h1>
          Eu-Car-rentals
          <span>
            <GradeIcon />
          </span>
        </h1>
        <h2>
          Save <span>big</span> and drive unlimited miles !
        </h2>
        <p>
          The most reliable rental company in the european union. we operate in
          multiple eu countries and have a good range of vehicles for all
          tastes.
        </p>
        <div className="btn-banner-container">
          <button className="btn-primary">
            Book a ride
            <span>
              {" "}
              <CheckCircleOutlineIcon />
            </span>
          </button>
          <button className="btn-primary">
            Learn more
            <span>
              <ChevronRightIcon />
            </span>
          </button>
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
