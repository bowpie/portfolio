import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const SkillCard = ({ skill }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="experience__card" data-aos="fade-in">
      <div className="experience__title">
        <BsPatchCheckFill />
        <h5>{skill.name}</h5>
      </div>
      <div className="experience__level">
        <h6>Level:</h6>
        <small>{skill.level}</small>
      </div>

      <div className="experience__level">
        <h6>Category:</h6>
        <small>{skill.category}</small>
      </div>
    </div>
  );
};

export default SkillCard;
