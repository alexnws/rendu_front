import React from "react";
import { Layout } from "../components/struct/layout.js";

import { graphql } from "gatsby";

// Dans le cadre d'une page on peut utiliser le Query global

export const PageB = ({ data }) => {
  console.log("data query global", data);
  return (
    <>
      <Layout />
      <body>
        <h1>À propos de moi</h1>
        <h2>Qui suis-je ?</h2>
        <p>
          Je m'appelle Alexandre, j'ai 22 ans et je suis étudiant à l'ECV
          Digital en 3ème année.
        </p>
        <p>
          J'ai obtenu mon diplôme en BTS système numérique à IONECO, et depuis,
          j'ai travaillé dans différents domaines en tant que informaticien et
          par la suite développeur web.
        </p>
        <section>
          <h2>Mes compétences</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React.JS</li>
          </ul>
        </section>
        <section>
          <h2>Mon objectif</h2>
          <p>
            Mon objectif est de devenir dévelopeur web, et je suis prêt à mettre
            mes compétences et mon expérience au service de cette ambition.
          </p>
        </section>
      </body>
    </>
  );
};

export default PageB;

export const myQuery = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { menu: { eq: "à propos" } } }) {
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
`;
