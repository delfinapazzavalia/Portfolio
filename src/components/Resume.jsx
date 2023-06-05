import React from "react";
import "./Resume.css";
import Card from "./Card";

const Resume = () => {
  return (
    <>
    <div className="resume">
             <h1>Resume</h1>
      <div className="resume-cards">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
 
    </>
  );
};

export default Resume;
