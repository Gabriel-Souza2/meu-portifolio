import { useEffect } from "react";
import { SocialButtons } from "../../components/SocialButtons";

import "./styles.scss";
import BigHeadAvatar from "../../assets/bighead_avatar.svg";

export function Header() {
  useEffect(() => {
    const animations = document.querySelectorAll("[data-anime]");

    animations.forEach((element) => {
      element.classList.add("animate");
    });
  }, []);

  return (
    <header id="header" className="header">
      <div className="overlay">
        <div></div>
      </div>

      <nav className="menu">
        <ul>
          <li className="menu__item">
            <a href="#header">Inicio</a>
          </li>
          <li className="menu__item">
            <a href="#what-i-do">O que eu faço?</a>
          </li>
          <li className="menu__item">
            <a href="#portifolio">Portfólio</a>
          </li>
          <li className="menu__item">
            <a href="#contact">Contatos</a>
          </li>
        </ul>
      </nav>
      <div className="avatar" data-anime="scale">
        <img src={BigHeadAvatar} alt="" />
      </div>
      <div className="titles" data-anime="top">
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
