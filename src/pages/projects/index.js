import { graphql, Link } from "gatsby";
import React from "react";
import ProjectsLayout from "../../components/ProjectsLayout";
import * as styles from "../../styles/projects.module.css"

export default function Projects({ data }) {
  const projects = data.allMarkdownRemark.nodes
  return (
    <ProjectsLayout>
      <section className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>From created websites to learning projects.</h3>
        <div className={styles.projects}>
          {projects.map(project => (
            <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
              <div>
                <h3>{ project.frontmatter.title }</h3>
                <p>{ project.frontmatter.stack }</p>
              </div>
            </Link>
            ))}
        </div>
      </section>
    </ProjectsLayout>
  )
}

// export page query
export const query = graphql`
query ProjectsPage {
  allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      frontmatter {
        slug
        stack
        title
        date
      }
      id
    }
  }
}
`