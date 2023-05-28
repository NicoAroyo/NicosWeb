import React from "react";
import CardsForSkills from "../../components/cards/CardsForSkills";
import "./Skills.scss";

function Skills() {
  return (
    <>
      <h1>Backend</h1>
      <h5>
        Node.js, Asp.net, mySql, msSql, MongoDB, Mongoose, Entity Framework,
        Docker, REST, axios, express
      </h5>
      <h1>Frontend</h1>
      <h5>ReactJS, HTML, css, sass, redux, WPF</h5>
      <CardsForSkills> </CardsForSkills>
    </>
  );
}

export default Skills;
