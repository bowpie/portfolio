import React from "react";
import "./experience.css";
import SearchBar from "./SearchBar";
import SkillCard from "./SkillCard";
import { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import SectionHeader from "../body/SectionHeader";

let skillResults = [];
const skillsPerPage = 8;

const Experience = () => {
  const [skillsDisplayed, setSkillsDisplayed] = useState([]);
  const [next, setNext] = useState(skillsPerPage);

  const displayResult = (results, next) => {
    console.log(next);
    if (results.length === 0) {
      setSkillsDisplayed([]);
    } else {
      setSkillsDisplayed(
        results
          .slice(0, Math.min(next, results.length))
          .map((value) => <SkillCard skill={value} />)
      );
    }
  };

  const handleResults = (results) => {
    skillResults = results;
    setNext(skillsPerPage);
    displayResult(results, next);
  };

  const showMoreSkills = () => {
    displayResult(skillResults, next + skillsPerPage);
    setNext(next + skillsPerPage);
  };

  const showLessSkills = () => {
    displayResult(skillResults, skillsPerPage);
    setNext(skillsPerPage);
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section id="experience">
      <SectionHeader title={"My experience"} subtitle={"What skills I have"} />
      <div className="container experience__container" data-aos="zoom-out">
        <SearchBar callbackFromParent={handleResults} />
        <div className="container skills__container ">{skillsDisplayed}</div>

        {skillResults.length > next ? (
          <div
            className="btn experience__loadmore"
            data-aos="zoom-out"
            onClick={showMoreSkills}
          >
            Load more
          </div>
        ) : skillResults.length > skillsPerPage ? (
          <div className="btn experience__loadmore" onClick={showLessSkills}>
            Load less
          </div>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
};

export default Experience;
