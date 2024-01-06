import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <Header />
      <div className="contact">
        <div className="info">
          <span>
            <h2>Sandrine COUPART</h2>
          </span>
          <span>&#9743; : 06.22.33.44.55</span>
          <span>&#9993; : sandrinecoupart.gmail.com</span>
          <span>&#9906;: 01 rue de la bonnebouffe 14000 CAEN</span>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
