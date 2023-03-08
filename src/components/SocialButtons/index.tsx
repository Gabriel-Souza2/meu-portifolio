import { motion, useAnimation } from "framer-motion";

import "./styles.scss";

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
        <img src="/github.png" />
      </a>
      <a
        target="_blank"
        className="social__buttons__icon"
        href="https://www.instagram.com/gabrielgomes1061/"
      >
        <img src="/instagram.png" />
      </a>
      <a
        className="social__buttons__icon"
        target="_blank"
        href="https://www.linkedin.com/in/gabrielsouza2/"
      >
        <img src="/linkedin.png" />
      </a>
    </motion.div>
  );
}
