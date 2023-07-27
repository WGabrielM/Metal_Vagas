import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Pages/Home'
import NotFound from './components/Pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<div>Página não encontrada</div>} />
      </Routes>
    </BrowserRouter>
  )
}