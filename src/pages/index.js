import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import * as styles from "../styles/home.module.css";
import Img from "gatsby-image";

export default function Home({ data }) {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Lena Sedkiewicz</h2>
          <h3>WordPress Developer</h3>
          <p>Creating and maintaining WordPress websites</p>
        </div>
        <Link className={styles.btn} to="/projects">
          My Portfolio Projects
        </Link>
        <Img fluid={data.file.childImageSharp.fluid} />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Banner {
    file(relativePath: { eq: "banner.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
