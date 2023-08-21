import React from "react";
import "./style/AboutUs.css";

export default function AboutUs() {
  return (
    <div className="aboutus">
      <div className="aboutus__resume">
        <h1 className="aboutus__resume--title">O que falam sobre nós?</h1>
      </div>
      <div className="aboutus__list">
        <div className="aboutus__list--card">
          <img
            className="img--card"
            src="/public/images/aboutus/wing.png"
            alt="Imagem Card"
          />
          <h3 className="title--card">Loren ipsun</h3>
          <p className="text--card">
            Loren ipsun dolor sit anet, consectetur adipisci elit, sed eiusnod
            tenpor incidunt ut labore et dolore nagna aliqua. Ut enin ad ninin
            venian,
          </p>
        </div>
        <div className="aboutus__list--card">
          <img
            className="img--card"
            src="/public/images/aboutus/wing.png"
            alt="Imagem Card"
          />
          <h3 className="title--card">Loren ipsun</h3>
          <p className="text--card">
            Loren ipsun dolor sit anet, consectetur adipisci elit, sed eiusnod
            tenpor incidunt ut labore et dolore nagna aliqua. Ut enin ad ninin
            venian,
          </p>
        </div>
      </div>
    </div>
  );
}
