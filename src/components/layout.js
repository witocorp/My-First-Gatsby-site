import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import {
  container,
  heading,
  navLinks,
  navLinksItem,
  navLinksText,
  siteTitle
} from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <main className={container}>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <p className={siteTitle}>{data.site.siteMetadata.title}</p>
      <nav>
        <ul className={navLinks}>
          <li className={navLinksItem}>
            <Link to="/" className={navLinksText}>
              Home
            </Link>
          </li>
          <li className={navLinksItem}>
            <Link to="/about" className={navLinksText}>
              About
            </Link>
          </li>
          <li className={navLinksItem}>
            <Link to="/blog" className={navLinksText}>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <h1 className={heading}>{pageTitle}</h1>
      {children}
    </main>
  );
};

export default Layout;
