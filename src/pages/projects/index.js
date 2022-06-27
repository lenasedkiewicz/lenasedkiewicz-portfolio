import React from "react";
import ProjectsLayout from "../../components/ProjectsLayout";
import * as styles from "../../styles/projects.module.css"

export default function Projects() {
  return (
    <ProjectsLayout>
      <section className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>From created websites to learning projects.</h3>
        <div>Hi, it's project page</div>
      </section>
    </ProjectsLayout>
  )
}
