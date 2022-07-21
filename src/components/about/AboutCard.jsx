import React from "react";
import "./about.css";

const AboutCard = ({ title, text, icon }) => {
  return (
    <div className="about__card">
      {icon}
      <h5>{title}</h5>
      <small>{text}</small>
    </div>
  );
};

export default AboutCard;
