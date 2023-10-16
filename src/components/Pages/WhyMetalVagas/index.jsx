import React from "react";
import "./style/WhyMetalVagas.css";
import TextArea from "../../TextArea";
import ButtonDefault from "../../ButtonDefault";

export default function WhyMetalVagas() {
  return (
    <div className="whymetalvagas">
      <div className="whymetalvagas__resume">
       <TextArea
          title="Por que a Metal Vagas"
          subTitle="Nossa Missão é “Tornar a seleção de um profissional qualificado muito
          mais facil."
        />
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

      <ButtonDefault text="Fale com um Atendente" />
    </div>
  );
}
