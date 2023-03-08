import { useEffect, useRef, useState } from "react";

import "./styles.scss";

export function Skills() {
  const myLinguages = [
    {
      name: "HTML",
      image: "/html.png",
    },
    {
      name: "CSS",
      image: "/css.png",
    },
    {
      name: "SASS",
      image: "/sass.png",
    },
    {
      name: "JS",
      image: "/js.png",
    },
    {
      name: "Typescript",
      image: "/typescript.png",
    },
    {
      name: "react",
      image: "/react.png",
    },
    {
      name: "php",
      image: "/php.png",
    },
    {
      name: "WordPress",
      image: "/wordpress.png",
    },
    {
      name: "Figma",
      image: "/figma.png",
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
