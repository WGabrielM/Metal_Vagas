import React from "react";
import "./style/Header.css";

export default function Header() {
  const buttonClick = () => {
    document.querySelector(".menu__item").classList.toggle("ativo");
  };

  return (
    <>
      <div className="header">
        <div className="logo"><p>Logo</p></div>
        <div className="menu">
          <button onClick={buttonClick} className="menu__button">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className="menu__item">
            <li className="menu__item--link"> <a href="/whatwedo">O que fazemos</a></li>
            <li className="menu__item--link"> <a href="">Para empresas</a></li>
            <li className="menu__item--link"> <a href="">Para profissionais</a></li>
            <li className="menu__item--link"> <a href="">Como funciona</a></li>
            <li className="menu__item--link">
              <span>Anunciar Vagas</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
