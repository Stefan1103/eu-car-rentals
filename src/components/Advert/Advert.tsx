import React from "react";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ToysIcon from "@mui/icons-material/Toys";
import NoCrashIcon from "@mui/icons-material/NoCrash";

const Advert = () => {
  return (
    <>
      <section className="advertisment">
        <h3>Plan your trip now</h3>
        <h2>Quick & easy car rental</h2>
        <div className="advertisment-wrapper">
          <div className="advertisment-1">
            <div className="icon-holder">
              <NoCrashIcon />
            </div>
            <h3>Select Car</h3>
            <p>
              We offer a big range of vehicles to suit all tastes. Unbeatable
              prices and milage on the market.
            </p>
          </div>
          <div className="advertisment-2">
            {" "}
            <div className="icon-holder">
              <SupportAgentIcon />
            </div>
            <h3>Contact Operator</h3>
            <p>
              Our knowledgeable and friendly operators got you covered for all
              kinds of questions and concerns.
            </p>
          </div>
          <div className="advertisment-3">
            <div className="icon-holder">
              <ToysIcon />
            </div>
            <h3>Start driving</h3>
            <p>
              You can hit the road as soon as possible.Whether you are going on
              the highway or in the city we got you covered!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Advert;
