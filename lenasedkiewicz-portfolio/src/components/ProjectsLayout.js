import React from 'react'
import ProjectsNavbar from "./ProjectsNavbar"

export default function ProjectsLayout({ children }) {
  return (
    <div className="projects-layout">
      <ProjectsNavbar />
        <div className="content">
          { children }
        </div>
        <footer>
            <p>Copytight &copy; 2022 Lena Sedkiewicz</p>
        </footer>
    </div>
  )
}
