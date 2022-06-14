import React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

const HomePage = () => {
    return (
        <main>
            <Layout
                pageTitle="Handcraft Heaven"
                pageHeading="Crochet, half-cross stitch and decoupage"            >
            Welcome to my site! I share here photos of my work of arts.
            <StaticImage
                src="../images/half-cross-stitch_2.jpg"
                alt="Flowers in vase"
                loading="eager"
            />
            </Layout>
        </main>
    )
}

export default HomePage