import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import "../components/styles/home.css";
import { Layout } from "../components/struct/layout.js";
import Dashboard from "../../media/images/dashboard.png";
import Monsite from "../../media/images/monsite.png";

// Dans le cadre d'une page on peut utiliser le Query global
// par contre dans le cadre d'un composant cela n'est pas possble donc ici
// on utilise la fonction hook de gatsby pour l'appeler en local.

// ici c'est encore plus particulier car on doit passer par la page index pour recevoir la

export default function Home() {
  // console.log("data query from index",data);
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          filter: { frontmatter: { menu: { eq: "accueil" } } }
        ) {
          edges {
            node {
              frontmatter {
                categorie
                menu
                lang
                title
              }
              html
            }
          }
        }
      }
    `
  );
  console.log("data query from here", data);

  return (
    <>
      <Layout />
      <body>
        <header>
          <h1>Présentation de mon portfolio</h1>
        </header>
        <main>
          <h2>Projet 1</h2>
          <p>
            Voici un projet en React qui consiste à jouter ou retirer de
            l'argent, pour mettre à jour un compte bancaire.
          </p>
          <img src={Dashboard} />
          <a href="https://dashboard-alexnws.vercel.app">
            Cliquez ici pour accéder au site
          </a>
          <h2>Projet 2</h2>
          <p>
            C’était un projet, pour me familiariser avec les fonctionnalités en
            React. Sur ce site, il y a un système de filtre (homme, femme ou
            mixte), ajouter un ou plusieurs articles dans le panier, supprimer
            un ou plusieurs articles dans le pannier, menu déroulant
          </p>
          <img src={Monsite}></img>
          <br />
          <footer>copyright @2023</footer>
        </main>
      </body>
    </>
  );
}
