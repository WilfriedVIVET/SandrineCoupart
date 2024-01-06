import React from "react";

const Cards = (props) => {
  return (
    <div className="card">
      <div className="card-title">
        <h2>{props.recette.title}</h2>
      </div>
      <div className="trait"></div>
      <div className="prepa">
        <span>
          <strong>Description :</strong> {props.recette.description}
        </span>
        <br />
        <span>
          <strong>Temps de préparation :</strong>{" "}
          {props.recette.preparation_time} min
        </span>
        <br />
        <span>
          <strong>Temps de cuisson :</strong> {props.recette.cooking_time} min
        </span>
        <br />
        <span>
          <strong>Temps de repos :</strong> {props.recette.break_time} min
        </span>
        <br />
        <span>
          <strong>Ingredients </strong>: {props.recette.ingredient}
        </span>
      </div>
      <div className="trait"></div>
      <div className="step">
        <p>
          <strong>Les étapes :</strong> {props.recette.step}
        </p>
      </div>
      <div className="trait"></div>
      <div className="card-footer">
        <span>
          <strong>Allergene :</strong> {props.recette.allergen}
        </span>
        <br />
        <span>
          <strong>Régime :</strong> {props.recette.regime}
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
