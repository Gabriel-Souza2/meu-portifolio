import { useState } from "react";
import "./styles.scss";

export function Menu() {
  const [activeMenu, setActiveMenu] = useState(false);
  function handleHamburgerMenu() {
    setActiveMenu((state) => !state);
  }

  const menuItens = [
    {
      name: "Inicio",
      link: "#header",
    },
    {
      name: "O que eu faço?",
      link: "#what-i-do",
    },
    {
      name: "Portfólio",
      link: "#portifolio",
    },
    {
      name: "Contatos",
      link: "#contact",
    },
  ];

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

        {menuItens.map((item, index) => (
          <li className="menu__item" key={index}>
            <a href={item.link} onClick={handleHamburgerMenu}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      <div className="menu__overlay" onClick={handleHamburgerMenu}></div>
    </nav>
  );
}
