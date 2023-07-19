import React, { useEffect, useRef } from "react";
import "./style/Header.css";

function abrirMenu() {
  document.querySelector(".menu__button").addEventListener("click", () => {
    document.querySelector(".menu__item").classList.add("ativo");
  });
}


export default function Header() {
  const activeSlideRef = useRef(null);

  useEffect(() => {
    if (activeSlideRef.current) {
        activeSlideRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'nearest'
        });
    }
  }, [activeSlide]);
  
  return (
    <div className="header">
      <div>Logo aqui</div>
      <div className="menu">
        <button className="menu__button" ref={i === activeSlide ? activeSlideRef : null}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className="menu__item">
          <li className="menu__item--link">O que fazemos</li>
          <li className="menu__item--link">Para empresas</li>
          <li className="menu__item--link">Para profissionais</li>
          <li className="menu__item--link">Como funciona</li>
          <li className="menu__item--link">
            <span>Anunciar Vagas</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
