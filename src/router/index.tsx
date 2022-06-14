import React from "react";
import { BrowserRouter, Routes as Switch, Route, Link } from "react-router-dom";
import Navbar from "../components/navbar";
import Home from "../views/Home";

const Router: React.FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <div className="content app__element">
          <Switch>
            <Route path="/" element={<Home />} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Router;
