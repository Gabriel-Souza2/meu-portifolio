import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import "./styles.scss";

export function Skills() {
  const skills = useRef<HTMLDivElement>({} as HTMLDivElement);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(skills.current?.scrollWidth - skills!.current?.offsetWidth);
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
  ];

  return (
    <section id="skills" className="skills">
      <h2 className="sections-title">Minhas skills</h2>
      <motion.div
        className="skills__list-linguages"
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        ref={skills}
      >
        {myLinguages.map((lingague, index) => {
          return (
            <motion.div key={index} className="skills__list-linguages__item">
              <motion.div className="linguages-wrapper">
                <img src={lingague.image} />
                <div className="tooltip">{lingague.name}</div>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
