import React from "react";
import "./style/WhyMetalVagas.css";

export default function WhyMetalVagas() {
  return (
    <div className="whymetalvagas">
      <div className="whymetalvagas__resume">
        <h1 className="whymetalvagas__resume--title">
          Por que a <span className="whymetalvagas__bold">Metal</span>Vagas
        </h1>
        <h2 className="whymetalvagas__resume--subtitle">
          Nossa Missão é “Tornar a seleção de um profissional qualificado muito
          mais facil.
        </h2>
      </div>
      <div className="whymetalvagas__list">
        <div className="whymetalvagas__list--card">
          <img
            className="img--card"
            src="/public/images/whymetalvagas/interface.png"
            alt="Imagem Card"
          />
          <h3 className="title--card">Velocidade</h3>
          <p className="text--card">
            Publique sua vaga em menos de 5 minutos no painel de anúncios
          </p>
        </div>
        <div className="whymetalvagas__list--card">
          <img
            className="img--card"
            src="/public/images/whymetalvagas/whatsapp.png"
            alt="Imagem Card"
          />
          <h3 className="title--card">Específico</h3>
          <p className="text--card">
            Seu anuncio só é exibido para o profissional desejado, evitando
            desperdícios.
          </p>
        </div>
        <div className="whymetalvagas__list--card">
          <img
            className="img--card"
            src="/public/images/whymetalvagas/view.png"
            alt="Imagem Card"
          />
          <h3 className="title--card">Mensurável</h3>
          <p className="text--card">
            Você recebe os dados da quantidade de profissionais que se
            candidataram na vaga pela plataforma.
          </p>
        </div>
        <div className="whymetalvagas__list--card">
          <img
            className="img--card"
            src="/public/images/whymetalvagas/view.png"
            alt="Imagem Card"
          />
          <h3 className="title--card">Banco de Dados</h3>
          <p className="text--card">
            Possuímos um banco de dados com milhares de profissionais, que
            recebem na hora a vaga anunciada.
          </p>
        </div>
      </div>
      <button className="whymetalvagas__resume--link">
        Fale com um Atendente
      </button>
    </div>
  );
}
