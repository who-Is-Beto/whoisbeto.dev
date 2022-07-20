import React from "react";
import "./Home.css";

const Home: React.FC = (): JSX.Element => {
  return (
    <div className="home__container page">
      <a href="https://www.instagram.com/who.is.beto/" target="_blank">
        <img className="home__image" src="https://i.imgur.com/sDFAEGc.jpg" alt="whoIsBeto photo" />
      </a>

      <div className="greeting">
        <p className="greeting__text">HELLO WORLD!</p>
        <p>I'M</p>
        <span className="green-text">ROBERTO CORTÉS MONROY</span>
        <p>whoIsBeto</p>
        <p>-Full Stack Engineer-</p>
      </div>
    </div>
  );
};

export default Home;
