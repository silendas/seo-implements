import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Galery from "../pages/Galeri";
import News from "../pages/Berita";
import DetailBerita from "../pages/DetailBertia";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/berita" element={<News />} />
      <Route path="/berita/:slug" element={<DetailBerita />} />
      <Route path="/galeri" element={<Galery />} />
    </Routes>
  );
}

export default AppRoutes;
