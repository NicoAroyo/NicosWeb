import React from "react";
import "./Cards.scss";
import CardItem from "./CardItem";
import bunnieslogo from "../images-for-cards/bunnieslogo.jpg";
import { FaGithub } from "react-icons/fa";
import testylogo from "../images-for-cards/testylogo.jpeg";
function CardsForSkills() {
  return (
    <div className="cards">
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={bunnieslogo}
              text="Bunnies social media project- frontend repo"
              text2={<FaGithub></FaGithub>}
              label="Project-reactJS"
              path="https://github.com/NicoAroyo/BunniesFront"
            ></CardItem>
            <CardItem
              src={bunnieslogo}
              text="Bunnies social media project- backend repo"
              text2={<FaGithub></FaGithub>}
              label="Project-node.js"
              path="https://github.com/NicoAroyo/BunniesBack"
            ></CardItem>
            <CardItem
              src={testylogo}
              text="Testy create and take tests- frontend repo"
              text2={<FaGithub></FaGithub>}
              label="Project- reactJS"
              path="https://github.com/NicoAroyo/TestyFront"
            ></CardItem>
            <CardItem
              src={testylogo}
              text="Testy create and take tests- backend repo"
              text2={<FaGithub></FaGithub>}
              label="Project - node.js"
              path="https://github.com/NicoAroyo/TestyBack"
            ></CardItem>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardsForSkills;
