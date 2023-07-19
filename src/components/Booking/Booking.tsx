import React from "react";
import { vehicles, locations } from "../../data";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const Booking = () => {
  return (
    <section className="booking">
      <form>
        <div className="form-wrapper">
          <div className="col-1">
            <div className="input-wrapper">
              <label htmlFor="vehicle-brand">
                <span>
                  <DirectionsCarIcon />
                </span>
                Car Model
              </label>
              <select
                id="veihcle-brand"
                name="vehicle-brand"
                title="ye"
                placeholder="selectit"
              >
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
          </div>
          <div className="col-2">
            <div className="input-wrapper">
              <label htmlFor="pick-up">
                <span>
                  <LocationOnIcon />
                </span>
                Pick up
              </label>
              <select id="pick-up" name="pick-up">
                <option disabled={true} value="">
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
          </div>
          <div className="col-3">
            <div className="input-wrapper">
              <label htmlFor="drop-off">
                <span>
                  <LocationOnIcon />
                </span>
                Drop off
              </label>
              <select id="drop-off" name="drop-off">
                <option disabled={true} value="">
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
