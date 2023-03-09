import { motion } from "framer-motion";

import "./styles.scss";

import Github from "../../assets/github.svg";
import Linkedin from "../../assets/linkedin.svg";
import Instagram from "../../assets/instagram.svg";

export function SocialButtons() {
  return (
    <motion.div
      animate={{
        x: 0,
      }}
      initial={{
        x: 200,
      }}
      transition={{
        duration: 1,
        delay: 0.5,
      }}
      className="social__buttons"
    >
      <a
        target="_blank"
        className="social__buttons__icon"
        href="https://github.com/Gabriel-Souza2"
      >
        <img src={Github} />
      </a>
      <a
        target="_blank"
        className="social__buttons__icon"
        href="https://www.instagram.com/gabrielgomes1061/"
      >
        <img src={Instagram} />
      </a>
      <a
        className="social__buttons__icon"
        target="_blank"
        href="https://www.linkedin.com/in/gabrielsouza2/"
      >
        <img src={Linkedin} />
      </a>
    </motion.div>
  );
}
