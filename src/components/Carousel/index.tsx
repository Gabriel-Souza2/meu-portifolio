import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import "./styles.scss";

import projects from "../../projects.json";

export function Carosel() {
  const carousel = useRef<HTMLDivElement>({} as HTMLDivElement);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel!.current?.offsetWidth);
  }, []);

  return (
    <motion.div ref={carousel} className="carousel">
      <motion.div
        className="inner"
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        whileTap={{
          cursor: "grabbing",
        }}
      >
        {projects.projects.map((project) => (
          <motion.div className="item" key={project.main_image}>
            <motion.div className="item__overlay">
              <h4>{project.name}</h4>
              <span>{project.description}</span>
              <a href={project.link} className="btn-action">
                Ver site
              </a>
            </motion.div>
            <img src={project.main_image} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
