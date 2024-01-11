import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <nav>
        <ul>
          <li>
            <NavLink to="/mention">Mentions légales</NavLink>
          </li>
          <li>
            <NavLink to="/politique" className="a">
              Politique de confidentialité
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Footer;
