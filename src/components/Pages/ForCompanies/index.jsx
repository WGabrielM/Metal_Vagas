import React from "react";
import "./style/ForCompanies.css";

export default function ForCompanies() {
  return (
    <div className="forcompanies">
      <div className="forcompanies__resume">
        <h1 className="forcompanies__resume--title">
          Para <span className="forcompanies__bold">empresas</span>
        </h1>
        <h2 className="forcompanies__resume--subtitle">
          Encontre os melhores profissionais disponíveis no mercado.
        </h2>
        <p className="forcompanies__resume--text">
          Unimos especialistas com mais de 20 anos de experiencia em diversas
          modalidade:{" "}
          <span className="forcompanies__bold">
            Solda, Caldeiraria, Pintura, Mecânica etc
          </span>{" "}
          .. Adicionamos ao conhecimento deles Tecnologia e Inteligência
          Artificial, criando uma ferramenta com filtros mais precisos, onde só
          o profissionais que atendam os requisitos da vaga anunciada, podem se
          cadastrar. Evitando o desperdício de tempo e recursos.
        </p>
      </div>

      <img
        className="forcompanies__image"
        src="/src/assets/images/forcompanies.png"
        alt="For companies website"
      />
    </div>
  );
}
