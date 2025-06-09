import React from "react";
import "./Kontakt.css";

const Kontakt = () => {
  return (
    <section className="contact-section">
      <div className="contact-container" id="kontakt">
        <h2>Kontaktirajte nas</h2>
        <p>Imate pitanja? Pošaljite nam poruku ili nas posjetite lično.</p>
        <div className="contact-content">
          <form className="contact-form">
            <input type="text" placeholder="Ime i prezime" required />
            <input type="email" placeholder="Email adresa" required />
            <textarea placeholder="Vaša poruka" required></textarea>
            <button type="submit">Pošalji</button>
          </form>
          <div className="contact-info">
            <h3>Fitness Elite Zenica</h3>
            <p>Adresa Fitness Elite 1: Kamberovića polje bb, Zenica</p>
            <p>Adresa Fitness Elite 2: Sarajevska 65, Zenica</p>
            <p>Telefon: +387 61 527 136</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kontakt;
