import React from "react";
import "./portfolio.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ProjectCard = (props) => {
  return (
    <div className="project_card">
      <img src={props.imageLink} alt="project" />
      <div className="project_card_content">
        <div className="project_card_title">
          <h2>{props.title}</h2>
        </div>
        <div className="project_card_description">
          <p>{props.description}</p>
        </div>
        <div className="project_card_tags">
          {props.tags.map((tag) => (
            <span>{tag}</span>
          ))}
        </div>
        <div className="project_card_links">
          <a
            href={props.codeLink}
            className="btn btn-primary"
            target={"_blank"}
            rel="noreferrer"
          >
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
