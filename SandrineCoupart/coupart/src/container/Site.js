import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "../pages/Accueil";
import Contact from "../pages/Contact";
import Mention from "../pages/Mention";
import Politique from "../pages/Politique";
import Recettes from "../pages/Recette";
import Connexion from "../pages/Connexion";

const Site = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/recettes" element={<Recettes />} />
        <Route path="/mention" element={<Mention />} />
        <Route path="/politique" element={<Politique />} />
        <Route path="/connexion" element={<Connexion />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Site;
