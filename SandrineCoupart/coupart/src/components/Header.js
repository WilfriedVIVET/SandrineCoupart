import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="header">
      <div className="logo">
        <div className="matricule1">Sandrine COUPART</div>
        <div className="matricule2">Diététicienne/Nutritionniste</div>
      </div>
      <nav className="navHeader">
        <ul>
          <li className="li-navbar">
            <NavLink
              to="/"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              Accueil
            </NavLink>
          </li>
          <li className="li-navbar">
            <NavLink
              to="/contact"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              Contact
            </NavLink>
          </li>
          <li className="li-navbar">
            <NavLink
              to="/recettes"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              Recettes
            </NavLink>
          </li>
          <li className="li-navbar">
            <NavLink
              to="/connexion"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              Connexion
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
