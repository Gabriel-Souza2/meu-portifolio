import { useEffect, useState } from "react";
import { SocialButtons } from "../../components/SocialButtons";

import "./styles.scss";
import BigHeadAvatar from "../../assets/bighead_avatar.svg";
import { Menu } from "../../components/Menu";

export function Header() {
  const [startAnimation, setStartAnimation] = useState(false);
  useEffect(() => {
    setStartAnimation(true);
  }, []);

  const animation = startAnimation ? "animate" : "";

  return (
    <header id="header" className="header">
      <div className="overlay">
        <div></div>
      </div>

      <Menu />

      <div className={`avatar ${animation}`} data-anime="scale">
        <img src={BigHeadAvatar} alt="" />
      </div>
      <div className={`titles header__titles ${animation}`} data-anime="top">
        <h1 className="titles--main">Gabriel de Souza Gomes</h1>
        <h2 className="titles--subtitle">
          Desenvolvendo aplicações modernas para pessoas modernas.
        </h2>
        <h3 className="titles--thirdtitle">
          Desenvolvedor Web . Design UI/UX . Freelancer
        </h3>
      </div>
      <div className="social">
        <SocialButtons />
      </div>
    </header>
  );
}
