import React, { useEffect } from "react";
import Header from "../component/Header";
import { NavLink } from "react-router-dom";
import { getUserId } from "../Redux/actions/userId.action";

const Accueil = () => {
  useEffect(() => {
    getUserId();
  });

  return (
    <>
      <Header />
      <div className="container">
        <div className="propos-container">
          <div className="propos">
            <img src="/portrait.jpg" alt="portrait" id="portrait" />
            <h2>À Propos</h2>
          </div>
          <div className="text">
            <p>
              Je suis heureuse de vous accueillir sur mon site web. En tant que
              diététicienne, mon rôle est de vous aider à améliorer votre
              alimentation, au regard de votre situation personnelle.Je vous
              propose une approche diététique bienveillante, intuitive, fondée
              sur l’équilibre nutritionnel et sur le respect des sensations
              alimentaires et corporelles.
            </p>
            <br />
            <div className="trait"></div>
            <br />
            <p>
              Mon objectif premier est de vous permettre, à travers des recettes
              personnalisés, d’améliorer votre qualité de vie, tout en tenant
              compte de votre régime alimentaires ainsi que vos allergènes. Au
              plaisir de vous conseiller prochainement.
            </p>
            <br />
            <div className="sign">
              <span>Sandrine COUPART</span>
              <span>Diététicienne-nutritionniste.</span>
            </div>
          </div>
        </div>
        <div className="service-container">
          <div className="service">
            <p>
              N'oubliez pas à de vous connecter afin de pouvoir acceder à vos
              recettes personnalisées .
            </p>
            <div className="connexion">
              <NavLink to="/connexion" className="btn-connexion">
                Connexion
              </NavLink>
            </div>
            <p>Ou contactez-moi afin de vous enregistrer.</p>
            <div className="connexion">
              <NavLink to="/contact" className="btn-connexion">
                Contactez-moi.
              </NavLink>
            </div>
            <div className="reseaux">
              <p>Vous pouvez egalement me suivre sur mes reseaux sociaux.</p>
              <div className="sociaux">
                <ul>
                  <li>
                    <a href="/#">
                      <img src="/facebook.png" alt="facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <img src="/insta.png" alt="instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <img src="/twitter.png" alt="twitter" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accueil;
