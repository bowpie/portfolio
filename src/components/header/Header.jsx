import React from "react";
import "./header.css";
import HeaderButtons from "./HeaderButtons";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <h1 className="hero">
          <span className="hero-first-line">Bogdan</span>
          <span className="hero-second-line">Ungureanu</span>
        </h1>
        <h5>Computer Science Student</h5>
        <HeaderButtons />
        <div className="me">
          <img src={"/images/logome.png"} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
