import React, { SetStateAction } from "react";
import { vehicles, locations } from "../../data";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

interface IPropsBooking {
  setSelectedVehicle: React.Dispatch<SetStateAction<number | undefined>>;
  selectedVehicle: number | undefined;
}

const Booking: React.FC<IPropsBooking> = ({
  selectedVehicle,
  setSelectedVehicle,
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedVehicle(parseInt(e.target.value));
  };

  return (
    <section className="booking" id="booking">
      <h3>reserve your ride now</h3>
      <h2>Easy vehicle booking</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-wrapper">
          <div className="row">
            <div className="input-wrapper">
              <label htmlFor="vehicle-brand">
                <span>
                  <DirectionsCarIcon />
                </span>
                Car Model
              </label>
              <select
                id="vehicle-brand"
                name="vehicle-brand"
                title="ye"
                placeholder="selectit"
                onChange={handleSelect}
                value={selectedVehicle ? selectedVehicle : 0}
              >
                <option disabled={true} value="0">
                  choose a vehicle
                </option>
                {vehicles.map((vehicle) => {
                  const { id, brand, model } = vehicle;
                  return (
                    <option key={id} value={id}>
                      {brand}: {model}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="input-wrapper">
              <label htmlFor="pick-up">
                <span>
                  <LocationOnIcon />
                </span>
                Pick up
              </label>
              <select id="pick-up" name="pick-up" defaultValue={0}>
                <option disabled={true} value="0">
                  choose a location for pick-up.
                </option>
                {locations.map((location) => {
                  const { id, name } = location;
                  return (
                    <option key={id} value={id}>
                      {name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="input-wrapper">
              <label htmlFor="drop-off">
                <span>
                  <LocationOnIcon />
                </span>
                Drop off
              </label>
              <select id="drop-off" name="drop-off" defaultValue={0}>
                <option disabled={true} value="0">
                  choose a location for drop off.
                </option>
                {locations.map((location) => {
                  const { id, name } = location;
                  return (
                    <option key={id} value={id}>
                      {name}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="row">
            <div className="input-wrapper">
              <label htmlFor="date-pick-up">
                <span>
                  <CalendarMonthIcon />
                </span>
                Pick up
              </label>
              <input
                id="date-pick-up"
                placeholder="dd/mm/yyyy"
                name="date-pick-up"
                type="text"
              ></input>
            </div>
            <div className="input-wrapper">
              <label htmlFor="date-drop-off">
                <span>
                  <CalendarMonthIcon />
                </span>
                Drop off
              </label>
              <input
                id="date-drop-off"
                name="date-drop-off"
                placeholder="dd/mm/yyyy"
                type="text"
              ></input>
            </div>
            <button className="btn-booking" type="submit">
              Book the ride
              <span>
                {" "}
                <CheckCircleOutlineIcon />
              </span>
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Booking;
