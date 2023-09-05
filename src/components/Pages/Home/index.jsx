import React from "react";
import "./style/Home.css";
import ButtonDefault from "../../ButtonDefault";

export default function Home() {
  return (
    <div className="home">
      <h1 className="home__title">
        A plataforma que conecta empresas e profissionais da Metalmecânica
      </h1>
      <span className="home__description">
        Milhares de profissionais esperando pela sua vaga.
      </span>
      <ButtonDefault text="Ver mais" />
    </div>
  );
}