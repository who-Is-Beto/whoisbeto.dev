import React from "react";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { FaBriefcase, FaUser } from "react-icons/fa";
import { SiGooglemessages } from "react-icons/si";

import "./Navbar.css";

const Navbar: React.FC = (): JSX.Element => {
  return (
    <header className="header app__element">
      <nav className="navbar">
        <div className="navbar__item">
          <Link to="/">
            <AiFillHome />
          </Link>
        </div>
        <div className="navbar__item">
          <Link to="/about">
            <FaUser />
          </Link>
        </div>

        <div className="navbar__item">
          <Link to="/experience">
            <FaBriefcase />
          </Link>
        </div>

        <div className="navbar__item">
          <Link to="/contact">
            <SiGooglemessages />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
