import React from 'react';
import ProjectsLayout from '../components/ProjectsLayout';
import Img from 'gatsby-image';
import * as styles from "../styles/project-details.module.css";

export default function ProjectDetails() {
  return (
    <ProjectsLayout>
      <div className={styles.details}>
        <h2>Title</h2>
        <h3>stack</h3>
        <div className={styles.featured}>
            {/* <Img fluid={} /> */}
        </div>
        {/* <div className={styles.html} dangerouslySetInnerHTML={} /> */}
      </div>
    </ProjectsLayout>
  )
}
