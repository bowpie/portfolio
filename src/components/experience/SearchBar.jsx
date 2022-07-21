import React, { useEffect, useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { MdOutlineClear } from "react-icons/md";
import "./searchbar.css";
import { SKILLS } from "../../constants/EXPERIENCE_CARDS.jsx";

const SearchBar = (props) => {
  const [inputText, setInputText] = useState("");

  const onChange = (event) => {
    const currentText = event.target.value;
    setInputText(currentText);
  };

  useEffect(() => {
    // search for the text
    const searchSkill = (text) => {
      console.log(text);
      const skillsFound = [];
      for (const value of SKILLS) {
        if (
          value.name.toLowerCase().includes(text.toLowerCase()) === true ||
          value.category.toLowerCase().startsWith(text.toLowerCase())
        ) {
          skillsFound.push(value);
        }
      }
      return skillsFound;
    };
    let skills = SKILLS;
    if (inputText !== "") {
      skills = searchSkill(inputText);
      if (skills.length === 0) skills = SKILLS;
    }
    props.callbackFromParent(skills);
  }, [inputText]);

  return (
    <div className="searchbar__wrapper ">
      <input
        type="text"
        onChange={onChange}
        value={inputText}
        placeholder="Try searching for a skill, ex: Python"
      />
      <div
        className="searchbar__button"
        onClick={(e) => e.currentTarget.parentElement.classList.toggle("open")}
      >
        <BiSearchAlt2 className="searchbar__icon" />
      </div>

      <MdOutlineClear
        className="searchbar__clear"
        onClick={(e) => {
          setInputText("");
          e.currentTarget.parentElement.classList.toggle("open");
        }}
      />
    </div>
  );
};

export default SearchBar;
