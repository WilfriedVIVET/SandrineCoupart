import React, { useRef, useState } from "react";
import Header from "../component/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getUserId } from "../Redux/actions/userId.action";
import { getPersonalRecipes } from "../Redux/actions/personalRecipes.action";
import store from "../Redux/store/store";

const Connexion = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
  const spanError = useRef(null);

  const nameChange = (e) => {
    setName(e.target.value);
  };

  const firstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const resetSpan = () => {
    spanError.current.innerText = "";
  };

  //Verification de la presence en base de donné de l utilisateur.
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = JSON.stringify({ name, firstName });
    const url =
      "http://localhost/API_COUPART/API/users/" + name + "/" + firstName;

    const config = {
      method: "post",
      url: url,
      data: id,
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      axios(config).then((res) => {
        if (res.data > 0) {
          //=>page des recettes en fonction de l'utilisateur
          if (name === "coupart" && firstName === "sandrine") {
            console.log("admin");
          } else {
            store.dispatch(getUserId(name, firstName));
            store.dispatch(getPersonalRecipes(name, firstName));
            navigate("/recettes");
          }
        } else {
          spanError.current.innerText = "Utilisateur non répertorié";
        }
      });
    } catch {
      console.log("probléme de recherche sur l'utilisateur");
    }
  };

  return (
    <>
      <Header />
      <div className="connexion-container">
        <form onSubmit={handleSubmit} className="formulaire">
          <h2>Connexion</h2>
          <input
            type="text"
            name="prenom"
            placeholder="Votre prénom"
            onBlur={firstNameChange}
            onFocus={resetSpan}
          />
          <input
            type="text"
            name="nom"
            placeholder="Votre nom"
            onBlur={nameChange}
            onFocus={resetSpan}
          />
          <span className="erreur" ref={spanError}></span>
          <button className="btn" type="submit">
            Connexion
          </button>
        </form>
      </div>
    </>
  );
};

export default Connexion;
