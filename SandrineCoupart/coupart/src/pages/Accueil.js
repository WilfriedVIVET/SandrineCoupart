import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Accueil = () => {
  return (
    <>
      <Header />
      <div className="propos-container">
        <div className="portrait">
          <img src="/portrait.jpg" alt="portrait" id="image" />
        </div>

        <div className="propos">
          <div className="title">
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
            <p>
              Mon objectif premier est de vous permettre, à travers des recettes
              personnalisés, d’améliorer votre qualité de vie, tout en tenant
              compte de votre régime alimentaires ainsi que vos allergènes. Au
              plaisir de vous conseiller prochainement,
            </p>
            <br />
            <div className="sign">
              <p>Sandrine COUPART.</p>
            </div>
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
            <a href="/Connexion">Connexion</a>
          </div>
          <div className="trait"></div>
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
      <div className="blanc"></div>
      <Footer />
    </>
  );
};

export default Accueil;
