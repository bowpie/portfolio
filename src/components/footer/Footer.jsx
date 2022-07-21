import React from "react";
import "./footer.css";

import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { SiDiscord } from "react-icons/si";

const Footer = () => {
  return (
    <footer id="footer">
      <a href="#header" className="footer__logo">
        Bogdan Ungureanu
      </a>

      <ul className="permalinks">
        <li key={"Home"}>
          {" "}
          <a href="#header">Home</a>
        </li>
        <li key={"About"}>
          {" "}
          <a href="#about">About</a>
        </li>
        <li key={"Experience"}>
          {" "}
          <a href="#experience">Experience</a>
        </li>
        <li key={"Portfolio"}>
          {" "}
          <a href="#portfolio">Portfolio</a>
        </li>
        <li key={"Contact"}>
          {" "}
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.instagram.com/bogdann_u/">
          <BsInstagram />
        </a>
        <a href="https://github.com/bowpie/">
          <BsGithub />
        </a>
        <a href="https://discordapp.com/users/275278696368177154">
          <SiDiscord />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Bogdan Ungureanu. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
