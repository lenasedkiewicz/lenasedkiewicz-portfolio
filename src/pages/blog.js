import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const Blog = ( data ) => {
  console.log(data);
  return (
      <Layout pageTitle="Blog" pageHeading="Blog">
        <ul>
          {data.allFile.nodes.map((node) => {
            return<li>{node.name}</li>;
          })}
        </ul>
      </Layout>
  )
};

export const query = graphql`
  query {
    allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
      nodes {
        name
      }
    }
  }
`;

export default Blog
