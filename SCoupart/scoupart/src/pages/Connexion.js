import React, { useRef, useState } from "react";
import Header from "../component/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getUserId } from "../Redux/actions/userId.action";
import { getPersonalRecipes } from "../Redux/actions/personalRecipes.action";
import store from "../Redux/store/store";

const Connexion = () => {
  const navigate = useNavigate();

  const [identity, setIdentity] = useState({
    name: "",
    firstName: "",
  });

  const spanError = useRef(null);

  const resetSpan = () => {
    spanError.current.innerText = "";
  };

  const handleChange = (e) => {
    resetSpan();
    const { name, value } = e.target;

    // Appliquer le remplacement uniquement si le champ est "firstName" ou "name"
    const replacedValue = ["firstName", "name"].includes(name)
      ? value.replace(/ /g, "-")
      : value;

    setIdentity((prevIdentity) => ({
      ...prevIdentity,
      [name]: replacedValue,
    }));
  };

  //Verification de la presence en base de donné de l utilisateur.
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `http://localhost/API_COUPART/API/users/${identity.name}/${identity.firstName}`;
      const res = await axios.get(url);

      if (res.data > 0) {
        store.dispatch(getUserId(identity.name, identity.firstName));
        store.dispatch(getPersonalRecipes(identity.name, identity.firstName));
        navigate("/recettes");
      } else {
        spanError.current.innerText = "Utilisateur non répertorié";
      }
    } catch (error) {
      console.log("Erreur lors de la requete au serveur", error);
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
            name="firstName"
            placeholder="Votre prénom"
            required
            value={identity.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="name"
            placeholder="Votre nom"
            required
            value={identity.name}
            onChange={handleChange}
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
