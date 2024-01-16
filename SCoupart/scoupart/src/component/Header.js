import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { isEmpty } from "./Utils";

const Navbar = () => {
  const [isActive, setIsActive] = useState(true);
  const [initial, setInitial] = useState("");

  const userId = useSelector((state) => state.userIdReducer);

  const makeInitial = (firstname, name) => {
    const result = firstname[0].toUpperCase() + name[0].toUpperCase();
    setInitial(result);
  };

  useEffect(() => {
    if (!isEmpty(userId)) {
      makeInitial(userId[0].firstname, userId[0].name);
    }
  });

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
              to="/connexion"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              Connexion
            </NavLink>
          </li>
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
              to="/admin"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              Admin
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
      <div className="login">
        <span>{initial}</span>
      </div>
      <img
        src="burger.png"
        alt="icone menu-burger"
        className="burger"
        onClick={menuBurger}
      />
    </nav>
  );
};

export default Navbar;
