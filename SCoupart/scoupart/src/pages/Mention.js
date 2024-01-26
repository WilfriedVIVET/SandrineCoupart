import React from "react";
import Header from "../component/Header";

const Mention = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="cadre">
          <h4>Mentions légales du site Sandrinecoupart </h4>
          <br />
          <span>
            <strong>Propriétaire </strong> du site web : Sandrine Coupart –
            Libérale numéro Adéli :123456789
          </span>
          <br />
          <br />
          <span>
            <strong>Numéro de SIRET de la micro entreprise</strong> :
            12345678945612
          </span>
          <br />
          <span>URSAFF Calvados 18, rue Joffre 14000 Caen </span>
          <br />
          <br />
          <p>
            <strong>Créateur</strong> : Sandrine <br />
            <br />
            <strong>Responsable de publication</strong> : Sandrine <br />
            <br />
            <strong>Adresse de courrier électronique </strong> :
            sandrinecoupart@gmail.fr <br />
            <br />
            <strong>Hébergeur</strong> : OVH– 5 rue degaulle – 66000 Perpignan –
            France <br /> <br />
            <strong>Résponsabilité :</strong>
            <br />
            Le propriétaire du site web se réserve le droit de modifier le
            contenu à tout moment, sans préavis. Toutes les marques, produis,
            logos et images cités dans ce site appartiennent à leur marque
            respective.
            <br />
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
    </>
  );
};

export default Mention;
