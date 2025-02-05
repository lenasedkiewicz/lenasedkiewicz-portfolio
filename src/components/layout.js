import React from "react"
import {
    Link,
    StaticQuery,
    graphql
} from "gatsby"
import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    pageHeader,
} from "./layout.module.css"

const Layout = ({ pageTitle, pageHeading, children }) => {

    return (
        <StaticQuery
            query={graphql`
                query PageTitleQuery {
                    site {
                    siteMetadata {
                        title
                    }
                    }
                }
            `}
            render={data => (
                <main className={container} >
                    <title>{pageTitle} | {data.site.siteMetadata.title}</title>
                    <header className={pageHeader}>{data.site.siteMetadata.title}</header>
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
                            <li className={navLinkItem}>
                                <Link to="/blog" className={navLinkText} >Blog</Link>
                            </li>
                        </ul>
                    </nav>
                    <h1 className={heading}>{pageHeading}</h1>
                    {children}
                </main>
            )}
        />
    );
};

export default Layout