import React from "react"
import { Link } from "gatsby"

const HomePage = () => {
    return (
        <main>
            <Link to="/about">
                About me
            </Link>
            <title>Handcraft Heaven</title>
            <h1>Crochet, half-cross stitch and decoupage</h1>
            <p>Welcome to my site! I share here photos of my work of arts.</p>
        </main>
    )
}

export default HomePage