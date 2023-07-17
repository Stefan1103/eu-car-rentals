import React from "react";
import { navLinks } from "../../data";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useState } from "react";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";

const Navbar = () => {
  const [sideBarOpen, setSideBarOpen] = useState<boolean>(false);
  return (
    <nav className="navbar">
      <nav className="nav-wrapper">
        <div className={`navbar-main ${sideBarOpen && "active"}`}>
          <Link to={"/"} className="logo">
            <h1>
              <span>
                <DirectionsCarIcon />
              </span>
              EU-Rentals
            </h1>
          </Link>
          <ul className="nav-items">
            {navLinks.map((navLink) => {
              const { title, id, url } = navLink;
              return (
                <Link className="nav-item" key={id} to={url}>
                  {title}
                </Link>
              );
            })}
          </ul>
          <div
            className="hamburger"
            onClick={() => {
              setSideBarOpen(!sideBarOpen);
            }}
          >
            <span className="line1" />
            <span className="line2" />
            <span className="line3" />
          </div>
        </div>
        <Sidebar sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen} />
      </nav>
    </nav>
  );
};

export default Navbar;
