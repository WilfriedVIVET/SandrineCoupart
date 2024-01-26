import React from "react";
import Header from "../component/Header";

const Contact = () => {
  return (
    <>
      <Header />

      <div className="container">
        <div className="info">
          <span>
            <h2>Sandrine COUPART</h2>
          </span>
          <div className="trait"></div>
          <br />
          <span>&#9743; : 06.22.33.44.55</span>
          <br />
          <span>&#9993; : sandrinecoupart.gmail.com</span>
          <br />
          <span>&#9906;: 01 rue de la bonnebouffe 14000 CAEN</span>
        </div>
      </div>
    </>
  );
};

export default Contact;
