import React from "react";
import Layout from "../../components/layout";
import { graphql, Link } from "gatsby";

const Blog = ({ data }) => {
  return (
    <Layout pageTitle="Blog" pageHeading="Blog">
        {data?.allMdx?.nodes.map((node) => {
        return <article key={node.id}>
          <Link to={node.slug}><h2>{node.frontmatter.title}</h2></Link>
          <p>{node.frontmatter.date}</p>
          <p>Modified: {node.parent.modifiedTime}</p>
          </article>;
      })}
    </Layout>
  );
};

export const query = graphql`
  query  {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "dddd, Do MMMM YYYY")
          title
        }
        id
        slug
        parent {
          internal {
            type
          }
          ... on File {
            id
            name
            modifiedTime(formatString: "dddd, Do MMMM YYYY")
          }
        }
      }
    }
  }
`;

export default Blog;
