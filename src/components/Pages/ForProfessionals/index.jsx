import React from "react";
import "./style/ForProfessionals.css";

export default function ForProfessionals() {
  return (
    <>
      <div className="forprofessionals">
        <div className="forprofessionals__resume">
          <h1 className="forprofessionals__resume--title">
            Para <span className="forprofessionals__bold">profissionais</span>
          </h1>
          <h2 className="forprofessionals__resume--subtitle">
            Fizemos várias pesquisas com os Profissionais da indústria
            metalmecânica, e descobrimos:
          </h2>
          <p className="forprofessionals__resume--text">
            Unimos especialistas com mais de 20 anos de experiencia em diversas
            modalidade: Solda, Caldeiraria, Pintura, Mecânica etc.. Adicionamos
            ao conhecimento deles Tecnologia e Inteligência Artificial, criando
            uma ferramenta com filtros mais precisos, onde só o profissionais
            que atendam os requisitos da vaga anunciada, podem se cadastrar.
            Evitando o desperdício de tempo e recursos.
          </p>
        </div>
        <div className="forprofessionals__list">
          <div className="forprofessionals__list--card">
            <img
              src="/public/images/ForProfessionals/forprofessionals-charts.png"
              alt="Lista chats"
            />
            <p>
              Dos profissionais Metalmecanico conhecem a maior Rede social
              Profissional, onde as empresas anunciam suas vagas
            </p>
          </div>
          <div className="forprofessionals__list--card">
            <img
              src="/public/images/ForProfessionals/forprofessionals-charts.png"
              alt="Lista chats"
            />
            <p>
              Dos profissionais Metalmecanico conhecem a maior Rede social
              Profissional, onde as empresas anunciam suas vagas
            </p>
          </div>
          <div className="forprofessionals__list--card">
            <img
              src="/public/images/ForProfessionals/forprofessionals-charts.png"
              alt="Lista chats"
            />
            <p>
              Dos profissionais Metalmecanico conhecem a maior Rede social
              Profissional, onde as empresas anunciam suas vagas
            </p>
          </div>
          <div className="forprofessionals__list--card">
            <img
              src="/public/images/ForProfessionals/forprofessionals-charts.png"
              alt="Lista chats"
            />
            <p>
              Dos profissionais Metalmecanico conhecem a maior Rede social
              Profissional, onde as empresas anunciam suas vagas
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
