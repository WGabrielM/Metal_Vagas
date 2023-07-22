import React, { useState } from 'react'
import './App.css'

export default function App() {
  return (
    <>
      <div className='home'>
        <h1 className='home__title'>A plataforma que conecta empresas e profissionais da Metalmecânica</h1>
        <span className='home__description'>Milhares de profissionais esperando pela sua vaga.</span>
        <button className='home__link'>Ver Mais</button>
      </div>
    </>
  )
}