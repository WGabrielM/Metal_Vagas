import React from "react";
import "./style/ForProfessionals.css";

export default function ForProfessionals() {
  return (
    <>
      <div className="forprofessionals">
        <div className="forprofessionals__resume">
          <h1 className="forprofessionals__resume--title">O que fazemos?</h1>
          <span className="forprofessionals__resume--subtitle">
            Somos uma Plataforma que conecta empresas da área industrial que
            precisam contratar mão de Obra, e os melhores Profissionais do
            Mercado.
          </span>
          <p className="forprofessionals__resume--text">
            A plataforma surgiu devido as dificuldades para encontrar Mão de
            Obra qualificada com rapidez e assertividade. Os processos de
            seleção ficam cada dia mais complexos e demorados, por isso
            resolvemos criar algo simples e funcional , onde qualquer pessoa com
            um celular na mão consegue anunciar, acompanhar e medir o alcance da
            vaga.
          </p>

          <button className="forprofessionals__resume--link">Ver Mais</button>
        </div>
        <div className="forprofessionals__video">
          <video width="100%" controls autoPlay muted loop>
            <source src="/src/videos/oquefazemos.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  );
}
