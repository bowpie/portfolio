import React from "react";
import "./portfolio.css";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "../../constants/PROJECTS_CARDS.jsx";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import SectionHeader from "../body/SectionHeader";

const Portfolio = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);

  return (
    <section id="portfolio">
      <SectionHeader title={"My portfolio"} subtitle={"Take a look at"} />

      <div className="container portfolio__container" data-aos="zoom-out">
        {PROJECTS.map(({ title, description, imageLink, codeLink, tags }) => (
          <ProjectCard
            title={title}
            description={description}
            imageLink={imageLink}
            codeLink={codeLink}
            tags={tags}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
