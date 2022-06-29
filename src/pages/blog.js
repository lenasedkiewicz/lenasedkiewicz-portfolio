import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

const Blog = ({ data }) => {
  return (
    <Layout pageTitle="Blog" pageHeading="Blog">
        {data?.allMdx?.nodes.map((node) => {
        return <article key={node.id}>
          <h2>{node.frontmatter.title}</h2>
          <p>{node.frontmatter.date}</p>
          <p>Modified: {node.parent.modifiedTime}</p>
          <MDXRenderer>{node.body}</MDXRenderer>
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
        body
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
