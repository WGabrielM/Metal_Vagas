import React from "react";
import "./style/WhatWeDo.css";
import ButtonDefault from "../../ButtonDefault";
import TextArea from "../../TextArea";

export default function WhatWeDo() {
  return (
    <div className="whatwedo">
      <div className="whatwedo__resume">
        <TextArea
          title="O que fazemos?"
          subTitle=" Somos uma Plataforma que conecta empresas da área industrial que
        precisam contratar mão de Obra, e os melhores Profissionais do
        Mercado."
          text="A plataforma surgiu devido as dificuldades para encontrar Mão de Obra
        qualificada com rapidez e assertividade. Os processos de seleção ficam
        cada dia mais complexos e demorados, por isso resolvemos criar algo
        simples e funcional , onde qualquer pessoa com um celular na mão
        consegue anunciar, acompanhar e medir o alcance da vaga."
        />
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
