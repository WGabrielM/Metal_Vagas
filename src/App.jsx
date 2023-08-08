import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Pages/Home";
import NotFound from "./components/Pages/NotFound";
import WhatWeDo from "./components/Pages/WhatWeDo";
import ForCompanies from "./components/Pages/ForCompanies";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/whatwedo" element={<WhatWeDo />} />
        <Route path="/forcompanies" element={<ForCompanies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}