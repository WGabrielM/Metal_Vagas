import React from "react";
import "./style/ForCompanies.css";
import TextArea from "../../TextArea";

export default function ForCompanies() {
  return (
    <div className="forcompanies">
      <div className="forcompanies__resume">
        <TextArea
          title="Para empresas"
          subTitle="Encontre os melhores profissionais disponíveis no mercado."
          text="Unimos especialistas com mais de 20 anos de experiencia em diversas
          modalidade: Solda, Caldeiraria, Pintura, Mecânica etc.. Adicionamos ao conhecimento deles Tecnologia e Inteligência
          Artificial, criando uma ferramenta com filtros mais precisos, onde só
          o profissionais que atendam os requisitos da vaga anunciada, podem se
          cadastrar. Evitando o desperdício de tempo e recursos."
        />
      </div>

      <div className="forcompanies__image">
        <img
          src="/src/assets/images/forcompanies.png"
          alt="For companies website"
        />
      </div>
    </div>
  );
}
