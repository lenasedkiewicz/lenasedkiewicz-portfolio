import { Link } from "gatsby";
import React from "react";

export default function ProjectsNavbar() {
    return (
        <nav>
            <h1>Lena Sedkiewicz - Projects</h1>
            <div className="nav_links">
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/projects/wordpress">WordPress websites</Link>
                <Link to="/projects/gatsby">GatsbyJS websites</Link>
                <Link to="/projects/htmlandcss">HTML and CSS websites</Link>
            </div>
        </nav>
    )
}