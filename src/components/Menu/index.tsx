import { useEffect, useState } from "react";
import "./styles.scss";

export function Menu() {
  const [activeMenu, setActiveMenu] = useState(false);
  function handleHamburgerMenu() {
    setActiveMenu((state) => !state);
  }

  const menuIsActive = activeMenu ? "active" : "";
  return (
    <nav className="menu">
      <button className="hamburger-menu" onClick={handleHamburgerMenu}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </button>
      <ul id="menu" className={menuIsActive}>
        <button className="close-menu" onClick={handleHamburgerMenu}>
          <span className="line"></span>
          <span className="line"></span>
        </button>
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
      <div className="menu__overlay" onClick={handleHamburgerMenu}></div>
    </nav>
  );
}
