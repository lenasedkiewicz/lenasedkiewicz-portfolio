import React from "react"
import { Link } from "gatsby"

const Layout = () => {
    return (
        <main>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/gallery">Gallery</Link>
                    </li>
                </ul>
            </nav>
        </main>
    )
}

export default Layout