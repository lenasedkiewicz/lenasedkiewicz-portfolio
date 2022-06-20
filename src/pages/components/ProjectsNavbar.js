import { Link } from "gatsby";
import React from "react";

export default function ProjectsNavbar() {
    return (
        <nav>
            <h1>Lena Sedkiewicz - Prijects</h1>
            <div className="nav_links">
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/wordpress">WordPress websites</Link>
                <Link to="/gatsby">GatsbyJS websites</Link>
                <Link to="/htmlandcss">HTML and CSS websites</Link>
            </div>
        </nav>
    )
}