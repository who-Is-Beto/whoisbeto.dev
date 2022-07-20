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
        <Link to="/">
          <div className="navbar__item">
            <AiFillHome />
          </div>
        </Link>
        <Link to="/about">
          <div className="navbar__item">
            <FaUser />
          </div>
        </Link>

        <Link to="/experience">
          <div className="navbar__item">
            <FaBriefcase />
          </div>
        </Link>

        <Link to="/contact">
          <div className="navbar__item">
            <SiGooglemessages />
          </div>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
