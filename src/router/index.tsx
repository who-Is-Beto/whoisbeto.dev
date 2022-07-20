import React from "react";
import { BrowserRouter, Routes as Switch, Route, Link } from "react-router-dom";
import Navbar from "../components/navbar";
import About from "../views/About";
import Contact from "../views/Contact";
import Experience from "../views/Experience";
import Home from "../views/Home";

const Router: React.FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <div className="content app__element">
          <Switch>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Router;
