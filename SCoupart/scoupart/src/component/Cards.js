import React from "react";

const Cards = ({ recip }) => {
  return (
    <div className="card">
      <div className="card-title">
        <h2>{recip.title}</h2>
      </div>
      <div className="trait"></div>
      <div className="prepa">
        <span>
          <strong>Description :</strong> {recip.description}
        </span>
        <br />
        <span>
          <strong>Temps de préparation :</strong> {recip.preparation_time} min
        </span>
        <br />
        <span>
          <strong>Temps de cuisson :</strong> {recip.cooking_time} min
        </span>
        <br />
        <span>
          <strong>Temps de repos :</strong> {recip.break_time} min
        </span>
        <br />
        <span>
          <strong>Ingredients </strong>: {recip.ingredient}
        </span>
      </div>
      <div className="trait"></div>
      <div className="step">
        <p>
          <strong>Les étapes :</strong> {recip.step}
        </p>
      </div>
      <div className="trait"></div>
      <div className="card-footer">
        <span>
          <strong>Allergene :</strong> {recip.allergen}
        </span>
        <br />
        <span>
          <strong>Régime :</strong> {recip.regime}
        </span>
      </div>
      <div className="trait"></div>
      <div className="notice">
        <p>
          <strong>Avis :</strong>
        </p>
        <p>
          <strong>Note :</strong>
        </p>
      </div>
    </div>
  );
};

export default Cards;
