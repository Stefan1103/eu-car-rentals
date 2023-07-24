import React from "react";
import { navLinks } from "../../data";
import { Link } from "react-router-dom";

interface ISideProps {
  sideBarOpen: boolean;
  setSideBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<ISideProps> = ({ sideBarOpen, setSideBarOpen }) => {
  return (
    <div className={`sidebar-menu ${sideBarOpen && "active"}`}>
      <ul>
        {" "}
        {navLinks.map((navLink) => {
          const { id, title, url } = navLink;
          return (
            <li key={id}>
              {url.charAt(0) === "#" ? (
                <a
                  onClick={() => setSideBarOpen(!sideBarOpen)}
                  className="side-links"
                  href={url}
                >
                  {title}
                </a>
              ) : (
                <Link
                  onClick={() => setSideBarOpen(!sideBarOpen)}
                  to={url}
                  className={"side-links"}
                >
                  {title}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
