import { motion } from "framer-motion";

import { SocialButtons } from "../../components/SocialButtons";

import "./styles.scss";
import BigHeadAvatar from "../../assets/bighead_avatar.svg";
import { Menu } from "../../components/Menu";

export function Header() {
  return (
    <header id="header" className="header">
      <div className="overlay">
        <div></div>
      </div>

      <Menu />

      <motion.div
        className="avatar"
        animate={{
          scale: 1,
        }}
        initial={{
          scale: 0,
        }}
        transition={{
          delay: 0.5,
          duration: 0.5,
        }}
      >
        <img src={BigHeadAvatar} alt="" />
      </motion.div>
      <motion.div
        className="titles header__titles"
        animate={{
          y: 0,
        }}
        initial={{
          y: 100,
        }}
        transition={{
          delay: 0.5,
          duration: 0.5,
        }}
      >
        <h1 className="titles--main">Gabriel de Souza Gomes</h1>
        <h2 className="titles--subtitle">
          Desenvolvendo aplicações modernas para pessoas modernas.
        </h2>
        <h3 className="titles--thirdtitle">
          Desenvolvedor Web . Design UI/UX . Freelancer
        </h3>
      </motion.div>
      <div className="social">
        <SocialButtons />
      </div>
    </header>
  );
}
