import React from "react";
import { Layout } from "../components/struct/layout.js";
import Sentsoft from "../../media/images/sentsoft.png";
export const Scentsoft = () => {
  return (
    <>
      <Layout />
      <body>
        <header>
          <h1>Scentsoft que-est-ce que c'est ?</h1>
        </header>
        <main>
          <h2>
            Scentsoft, la 1ère plateforme numérique de productivité pédagogique
            pour la formulation de parfums à destination des apprentis
            parfumeurs !
          </h2>
          <p>
            Le projet en bref est de faire évoluer et moderniser l’apprentissage
            de la composition des parfums en rendant la création de parfum plus
            accessible, interactive et ludique grâce au numérique.
          </p>
          <img src={Sentsoft} />
          <p>Voici la page d'accueil si Scentsoft existerai </p>

          <br />
          <footer>copyright @2023</footer>
        </main>
      </body>
    </>
  );
};

export default Scentsoft;
