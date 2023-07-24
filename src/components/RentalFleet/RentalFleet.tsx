import React, { SetStateAction, useState } from "react";
import { vehicles } from "../../data";

interface IPropsRentalFleet {
  setSelectedVehicle: React.Dispatch<SetStateAction<number | undefined>>;
}

const RentalFleet: React.FC<IPropsRentalFleet> = ({ setSelectedVehicle }) => {
  const [carModel, setCarModel] = useState(1);
  const [clickedToggle, setClickedToggle] = useState(false);

  const handleClick = (id: number): void => {
    setCarModel(id);
    setClickedToggle(!clickedToggle);
  };
  return (
    <section className="rental-fleet" id="rental-fleet">
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
                    key={vehicle.id}
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
                fuel,
                transmission,
                brand,
                doors,
                id,
                model,
                year,
                price,
              } = vehicle;
              if (carModel === id) {
                return (
                  <div key={id}>
                    <div className="table-specs">
                      <div className="table-head">
                        <h3>{price}$/rent per day</h3>
                      </div>
                      <div className="table-main">
                        <div className="col">
                          <div className="title">
                            <p>Brand</p>
                          </div>
                          <div className="title">
                            <p>Model</p>
                          </div>
                          <div className="title">
                            <p>Transmission</p>
                          </div>
                          <div className="title">
                            <p>Doors</p>
                          </div>
                          <div className="title">
                            <p>AC</p>
                          </div>
                          <div className="title">
                            <p>Fuel</p>
                          </div>
                          <div className="title">
                            <p>Year</p>
                          </div>
                        </div>
                        <div className="col">
                          {" "}
                          <div className="spec">
                            <p>{brand}</p>
                          </div>
                          <div className="spec">
                            <p>{model}</p>
                          </div>
                          <div className="spec">
                            <p>{transmission}</p>
                          </div>
                          <div className="spec">
                            <p>{doors}</p>
                          </div>
                          <div className="spec">
                            <p>{AC}</p>
                          </div>
                          <div className="spec">
                            <p>{fuel}</p>
                          </div>
                          <div className="spec">
                            <p>{year}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <a
                      onClick={() => setSelectedVehicle(id)}
                      href="#booking"
                      type="button"
                      className="btn-booking"
                    >
                      Reserve
                    </a>
                  </div>
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
