import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import "./styles.scss";

export function Skills() {
  const skills = useRef<HTMLDivElement>({} as HTMLDivElement);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (window.innerWidth < 1010) {
      setWidth((80 + 30) * myLinguages.length - skills.current?.scrollWidth);
    } else {
      setWidth(skills.current?.scrollWidth - skills.current?.offsetWidth);
    }
  }, []);

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
    <motion.section id="skills" className="skills">
      <h2 className="sections-title">Minhas skills</h2>

      <motion.div className="skills__list" ref={skills}>
        <motion.div
          className="skills__list__inner"
          drag="x"
          dragConstraints={{ right: 0, left: width }}
        >
          {myLinguages.map((lingague, index) => {
            return (
              <motion.div key={index} className="skills__item">
                <img src={lingague.image} />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
