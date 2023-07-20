import React, { useState } from "react";
import { vehicles } from "../../data";

const RentalFleet = () => {
  const [carModel, setCarModel] = useState(1);
  const [clickedToggle, setClickedToggle] = useState(false);

  const handleClick = (id: number): void => {
    setCarModel(id);
    setClickedToggle(!clickedToggle);
  };
  return (
    <section className="rental-fleet">
      <div className="rental-fleet-wrapper">
        <div className="header-rental-fleet">
          <h3>Vehicle Models</h3>
          <h2>Our Rental fleet</h2>
          <p>Choose from a varaity of amazing car models for your next trip!</p>
        </div>
        <div className="main-rental-fleet">
          <div className="model-names">
            {vehicles.map((vehicle) => {
              const { model, brand, id } = vehicle;
              return (
                <div
                  key={id}
                  className={`car-name ${carModel === id ? "active" : ""}`}
                  onClick={() => handleClick(id)}
                >
                  <h3>
                    {brand} - {model}
                  </h3>
                </div>
              );
            })}
          </div>
          <div className="model-img">
            {vehicles.map((vehicle) => {
              if (carModel === vehicle.id) {
                return (
                  <img
                    src={vehicle.img}
                    alt={`this is an image of ${vehicle.brand}- ${vehicle.model} that is for rent.`}
                  ></img>
                );
              }
            })}
          </div>
          <div className="model-specs">
            {vehicles.map((vehicle) => {
              const {
                AC,
                Fuel,
                Transmission,
                brand,
                doors,
                id,
                model,
                year,
                price,
              } = vehicle;
              if (carModel === id) {
                return (
                  <>
                    <div className="table-specs">
                      <div className="table-head">
                        <h3>{price}$/rent per day</h3>
                      </div>
                      <div className="table-main">
                        <div className="table-row">
                          <div className="col">Brand</div>
                          <div className="col">{brand}</div>
                        </div>
                        <div className="table-row">
                          {" "}
                          <div className="col">Model</div>
                          <div className="col">{model}</div>
                        </div>
                        <div className="table-row">
                          {" "}
                          <div className="col">Fuel</div>
                          <div className="col">{Fuel}</div>
                        </div>
                        <div className="table-row">
                          {" "}
                          <div className="col">Doors</div>
                          <div className="col">{doors}</div>
                        </div>
                        <div className="table-row">
                          {" "}
                          <div className="col">Year</div>
                          <div className="col">{year}</div>
                        </div>
                        <div className="table-row">
                          {" "}
                          <div className="col">AC</div>
                          <div className="col">{AC}</div>
                        </div>
                        <div className="table-row">
                          {" "}
                          <div className="col">Transmission</div>
                          <div className="col">{Transmission}</div>
                        </div>
                      </div>
                    </div>
                    <button type="button" className="btn-booking">
                      Reserve
                    </button>
                  </>
                );
              } else {
                return;
              }
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RentalFleet;
