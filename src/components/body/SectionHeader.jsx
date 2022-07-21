import React from "react";
import "./sectionheader.css";

const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className="section__header">
      <h5>{subtitle}</h5>
      <h2>{title}</h2>
    </div>
  );
};

export default SectionHeader;
