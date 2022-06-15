import React from "react"
import {
    Link,
    useStaticQuery,
    graphql
} from "gatsby"
import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
} from "./layout.module.css"

const Layout = ({ pageTitle, pageHeading, children }) => {
    const data =useStaticQuery(graphql`
    query PageTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `);

    return (
        <main className={container} >
            <title>{pageTitle} | {data.site.siteMetadata.title}</title>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}>
                        <Link to="/" className={navLinkText} >Home</Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/about" className={navLinkText} >About</Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/gallery" className={navLinkText} >Gallery</Link>
                    </li>
                </ul>
            </nav>
            <h1 className={heading}>{pageHeading}</h1>
            {children}
        </main>
    )
}

export default Layout