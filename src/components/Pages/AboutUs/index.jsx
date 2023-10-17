import React from "react";
import "./style/AboutUs.css";
import TextArea from "../../TextArea";

export default function AboutUs() {
  return (
    <div className="aboutus">
      <div className="aboutus__resume">
        <TextArea
          title="O que falam sobre nós?"
        />
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
      <div className="aboutus__help">
        <div className="aboutus__help--block">
          <p className="text--block">Como funciona para empresas</p>
        </div>
      </div>
    </div>
  );
}
