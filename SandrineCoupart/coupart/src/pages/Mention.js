import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Mention = () => {
  return (
    <>
      <Header />
      <div className="cadre-container">
        <div className="cadre">
          <h2>Mentions légales du site Sandrinecoupart </h2>
          <span>
            <strong>Propriétaire </strong> du site web : Sandrine Coupart –
            Libérale numéro Adéli :123456789
          </span>
          <br />
          <span>
            <strong>Numéro de SIRET de la micro entreprise</strong> :
            12345678945612
          </span>
          <span>URSAFF Calvados 18, rue Joffre 14000 Caen </span>
          <p>
            {" "}
            <strong>Créateur</strong> : Sandrine <br />
            <strong>Responsable de publication</strong> : Sandrine <br />
            <strong>Adresse de courrier électronique </strong> :
            sandrinecoupart@gmail.fr <br />
            <strong>Hébergeur</strong> : OVH– 5 rue degaulle – 66000 Perpignan –
            France <br />
            <strong>Résponsabilité :</strong>
            <br />
            Le propriétaire du site web se réserve le droit de modifier le
            contenu à tout moment, sans préavis. Toutes les marques, produis,
            logos et images cités dans ce site appartiennent à leur marque
            respective.
            <br />
            <strong>Traitement des données personnelles:</strong>
            <br />
            Les informations provenant de l’enregistrement de l’utilisateur sur
            le site, lors d’un paiement, d’une prise de contact ou d’un
            commentaire seront gardées confidentiellement et ne seront en aucun
            cas divulguées à un quelconque tiers.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Mention;

/*
Mentions légales du site Paulinediet
Propriétaire du site web : Pauline Pied – Libérale numéro Adéli :679504118

Numéro de SIRET de la micro entreprise : 83799281700028

URSAFF Alsace

16, rue Contades

67300 Schiltigheim

Créateur : Pauline
Responsable de publication : Pauline
Adresse de courrier électronique : miam@paulinediet.fr
Hébergeur : OVH – 2 rue Kellermann – 59100 Roubaix – France

Résponsabilité
Le propriétaire du site web se réserve le droit de modifier le contenu à tout moment, sans préavis.

Toutes les marques, produis, logos et images cités dans ce site appartiennent à leur marque respective.

Traitement des données personnelles
Les informations provenant de l’enregistrement de l’utilisateur sur le site, lors d’un paiement, d’une prise de contact ou d’un commentaire seront gardées confidentiellement et ne seront en aucun cas divulguées à un quelconque tiers.*/
