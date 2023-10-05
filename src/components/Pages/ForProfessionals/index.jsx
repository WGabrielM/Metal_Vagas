import React from "react";
import "./style/ForProfessionals.css";
import TextArea from "../../TextArea";
import ButtonDefault from "../../ButtonDefault";

export default function ForProfessionals() {
  return (
    <div className="forprofessionals">
      <div className="forprofessionals__resume">
        <TextArea
          title="Para profissionais"
          subTitle="Fizemos várias pesquisas com os Profissionais da indústria
          metalmecânica, e descobrimos:"
          text="Unimos especialistas com mais de 20 anos de experiencia em diversas
          modalidade: Solda, Caldeiraria, Pintura, Mecânica etc.. Adicionamos ao
          conhecimento deles Tecnologia e Inteligência Artificial, criando uma
          ferramenta com filtros mais precisos, onde só o profissionais que
          atendam os requisitos da vaga anunciada, podem se cadastrar. Evitando
          o desperdício de tempo e recursos."
        />
      </div>

      <div className="forprofessionals__list">
        <div className="forprofessionals__list--card">
          <img
            className="img--card"
            src="/public/images/ForProfessionals/forprofessionals-charts.png"
            alt="Lista chats"
          />
          <p className="text--card">
            Dos profissionais Metalmecanico conhecem a maior Rede social
            Profissional, onde as empresas anunciam suas vagas
          </p>
        </div>
        <div className="forprofessionals__list--card">
          <img
            className="img--card"
            src="/public/images/ForProfessionals/interface.png"
            alt="Lista chats"
          />
          <p className="text--card">
            Dos profissionais Metalmecanico conhecem a maior Rede social
            Profissional, onde as empresas anunciam suas vagas
          </p>
        </div>
        <div className="forprofessionals__list--card">
          <img
            className="img--card"
            src="/public/images/ForProfessionals/whatsapp.png"
            alt="Lista chats"
          />
          <p className="text--card">
            Dos profissionais Metalmecanico conhecem a maior Rede social
            Profissional, onde as empresas anunciam suas vagas
          </p>
        </div>
        <div className="forprofessionals__list--card">
          <img
            className="img--card"
            src="/public/images/ForProfessionals/view.png"
            alt="Lista chats"
          />
          <p className="text--card">
            Dos profissionais Metalmecanico conhecem a maior Rede social
            Profissional, onde as empresas anunciam suas vagas
          </p>
        </div>
      </div>

      <ButtonDefault text="Falar com um Atendente" />
    </div>
  );
}
