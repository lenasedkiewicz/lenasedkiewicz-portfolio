import { Link } from "gatsby";
import React from "react";

export default function Navbar() {
    return (
        <nav>
            <h1>Lena Sedkiewicz</h1>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
            </div>
        </nav>
    )
}