import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isActive, setIsActive] = useState("true");

  const menuBurger = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="navbar">
      <a href="/" className="logo">
        Sandrine Coupart
      </a>

      <div className={`nav-link ${isActive ? "" : "mobile-menu"}`}>
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
        </ul>
        <div className="espace"></div>
        <ul>
          <li className="li-navbar">
            <NavLink to="/mention" className="reference">
              Mentions légales
            </NavLink>
          </li>
          <li className="li-navbar">
            <NavLink to="/politique" className="reference">
              Politique de confidentialité
            </NavLink>
          </li>
        </ul>
      </div>
      <img
        src="burger.png"
        alt="menu-burger"
        className="burger"
        onClick={menuBurger}
      />
    </nav>
  );
};

export default Navbar;
