import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Connexion = () => {
  const [identity, setIdentity] = useState({
    name: "",
    firstName: "",
  });
  const info = document.getElementById("info");
  const focus = document.getElementById("firstName");
  const [users, setUsers] = useState([""]);

  useEffect(() => {
    axios
      .get("http://localhost/API_COUPART/API/user")
      .then((res) => setUsers(res.data));
  }, []);

  const onChange = (e) => {
    info.textContent = "";
    setIdentity({
      ...identity,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    focus.focus();
    verifyUser(users);
  };

  const verifyUser = (users) => {
    for (let i = 0; i < users.length; i++) {
      if (
        users[i].firstname + users[i].name ===
        identity.firstName + identity.name
      ) {
        break;
      } else {
        info.textContent = "utilisateur inconnu.";
      }
    }
  };

  return (
    <>
      <Header />
      <div className="connexion-container">
        <form onSubmit={onSubmit} className="formulaire">
          <h1>Connexion</h1>
          <div className="trait"></div>
          <div className="input-box">
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Prénom"
              onChange={onChange}
              required
            />
          </div>
          <div className="input-box">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Nom"
              onChange={onChange}
              required
            />
          </div>
          <div className="input-box">
            <span className="input-info" id="info"></span>
          </div>
          <button type="submit" className="btn-valider">
            Valider
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Connexion;
