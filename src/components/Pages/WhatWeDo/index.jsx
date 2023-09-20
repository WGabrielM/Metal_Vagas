import React from "react";
import "./style/WhatWeDo.css";
import ButtonDefault from "../../ButtonDefault";

export default function WhatWeDo() {
  return (
    <div className="whatwedo">
      <div className="whatwedo__resume">
        <h1 className="whatwedo__resume--title">O que fazemos?</h1>
        <h2 className="whatwedo__resume--subtitle">
          Somos uma Plataforma que conecta empresas da área industrial que
          precisam contratar mão de Obra, e os melhores Profissionais do
          Mercado.
        </h2>
        <p className="whatwedo__resume--text">
          A plataforma surgiu devido as dificuldades para encontrar Mão de Obra
          qualificada com rapidez e assertividade. Os processos de seleção ficam
          cada dia mais complexos e demorados, por isso resolvemos criar algo
          simples e funcional , onde qualquer pessoa com um celular na mão
          consegue anunciar, acompanhar e medir o alcance da vaga.
        </p>

        <ButtonDefault text="Ver mais" />
      </div>
      <div className="whatwedo__video">
        <video width="100%" controls autoPlay muted loop>
          <source src="/src/videos/oquefazemos.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
