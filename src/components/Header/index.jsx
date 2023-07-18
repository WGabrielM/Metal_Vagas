import React from "react";
import "./style/Header.css"

export default function Header() {
  return (
  <div className="header">
    <div>
        Logo aqui
    </div>
    <div className="menu">
        <button className="menu__button">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul>
            <li>Link aqui</li>
            <li>Link aqui</li>
            <li>Link aqui</li>
            <li>Link aqui</li>
            <li><button>Anunciar Vagas</button></li>
        </ul>
    </div>
  </div>
  )
}
