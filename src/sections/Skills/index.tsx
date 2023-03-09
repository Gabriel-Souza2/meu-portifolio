import "./styles.scss";

import HTML from "../../assets/html.svg";
import CSS from "../../assets/css.svg";
import JS from "../../assets/js.svg";
import SASS from "../../assets/sass.svg";
import Typescript from "../../assets/typescript.svg";
import React from "../../assets/react.svg";
import PHP from "../../assets/php.svg";
import Wordpress from "../../assets/wordpress.svg";
import Figma from "../../assets/figma.svg";

export function Skills() {
  const myLinguages = [
    {
      name: "HTML",
      image: HTML,
    },
    {
      name: "CSS",
      image: CSS,
    },
    {
      name: "SASS",
      image: SASS,
    },
    {
      name: "JS",
      image: JS,
    },
    {
      name: "Typescript",
      image: Typescript,
    },
    {
      name: "react",
      image: React,
    },
    {
      name: "php",
      image: PHP,
    },
    {
      name: "WordPress",
      image: Wordpress,
    },
    {
      name: "Figma",
      image: Figma,
    },
  ];

  return (
    <section id="skills" className="skills">
      <h2 className="sections-title">Minhas skills</h2>

      <div className="skills__list">
        <div className="skills__list__inner">
          {myLinguages.map((lingague, index) => {
            return (
              <div key={index} className="skills__item">
                <img src={lingague.image} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
