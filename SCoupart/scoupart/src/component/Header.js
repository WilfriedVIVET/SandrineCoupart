import React, { useCallback, useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { isEmpty } from "../Utils/Utils";
import { resetUserId } from "../Redux/actions/userId.action";

const Navbar = () => {
  const [isActive, setIsActive] = useState(true);
  const [initial, setInitial] = useState("");
  const [connect, setConnect] = useState(false);
  const userId = useSelector((state) => state.userIdReducer);
  const dispatch = useDispatch();
  const navbarRef = useRef(null);

  const makeInitial = useCallback(
    (firstname, name) => {
      if (connect) {
        const result = firstname[0].toUpperCase() + name[0].toUpperCase();
        setInitial(result);
      } else {
        setInitial("");
      }
    },
    [connect]
  );

  const resetUser = () => {
    dispatch(resetUserId());
  };

  const handleBodyClick = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      if (!event.target.classList.contains("burger")) {
        setIsActive(true);
      }
    }
  };
  document.body.addEventListener("click", handleBodyClick);

  useEffect(() => {
    if (!isEmpty(userId)) {
      setConnect(true);
      makeInitial(userId[0].firstname, userId[0].name);
    }
  }, [userId, makeInitial]);

  const menuBurger = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="navbar" ref={navbarRef}>
      <a href="/" className="logo">
        Sandrine Coupart
      </a>

      <div className={`nav-link ${isActive ? "" : "mobile-menu"}`}>
        <ul>
          <li className="li-navbar">
            <NavLink
              to={connect ? "/" : "/connexion"}
              className={(nav) => (nav.isActive ? "nav-active" : "")}
              onClick={connect ? resetUser : null}
            >
              {connect ? "Déconnexion" : "Connexion"}
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
          {!isEmpty(userId) &&
            userId[0].name === "coupart" &&
            userId[0].firstname === "sandrine" && (
              <li className="li-navbar">
                <NavLink
                  to="/admin"
                  className={(nav) => (nav.isActive ? "nav-active" : "")}
                >
                  Admin
                </NavLink>
              </li>
            )}
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
