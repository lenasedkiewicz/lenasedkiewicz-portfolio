import React from "react";
import ProjectsLayout from "../components/ProjectsLayout";
import Img from "gatsby-image";
import * as styles from "../styles/project-details.module.css";
import { graphql } from "gatsby";

export default function ProjectDetails({ data }) {
    const { html } = data.markdownRemark
    const { title, stack, featuredImg } = data.markdownRemark.frontmatter
  return (
    <ProjectsLayout>
      <div className={styles.details}>
        <h2>{title}</h2>
        <h3>{stack}</h3>
        <div className={styles.featured}>
            <Img fluid={featuredImg.childImageSharp.fluid} />
        </div>
        <div className={styles.html} dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </ProjectsLayout>
  )
}

export const query = graphql`
  query ProjectDetails ($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        stack
        title
        featuredImg {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
