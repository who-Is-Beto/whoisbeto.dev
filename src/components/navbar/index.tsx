import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { FaBriefcase, FaUser } from "react-icons/fa";
import { SiGooglemessages } from "react-icons/si";

import "./Navbar.css";

const Navbar: React.FC = (): JSX.Element => {
  return (
    <header className="header app__element">
      <nav className="navbar">
        <CustomLink to="/">
          <AiFillHome />
        </CustomLink>

        <CustomLink to="/about">
          <FaUser />
        </CustomLink>

        <CustomLink to="/experience">
          <FaBriefcase />
        </CustomLink>

        <CustomLink to="/contact">
          <SiGooglemessages />
        </CustomLink>
      </nav>
    </header>
  );
};

const CustomLink: React.FC<{ to: string; children: JSX.Element }> = ({ to, children }) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <Link to={to}>
      <div className={`navbar__item ${isActive ? "active" : ""}`}>{children}</div>
    </Link>
  );
};

export default Navbar;
