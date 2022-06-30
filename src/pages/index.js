import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import * as styles from "../styles/home.module.css";

export default function Home() {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Lena Sedkiewicz</h2>
          <h3>WordPress Developer</h3>
          <p>Creating and maintaining WordPress websites</p>
        </div>
        <Link className={styles.btn} to="/projects">My Portfolio Projects</Link>
        <img src="/banner.png" alt="Site banner" style={{ maxWidth: '100%' }} />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query SiteInfo {
    site {
      siteMetadata {
        description
        title
      }
    }
  }
`