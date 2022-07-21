import React from "react";
import { graphql, StaticQuery, Link } from "gatsby";
// import Layout from "../components/layout"

const MainMenu = ()=> (
  <StaticQuery
    query={graphql`
      {
        allWordpressWpApiMenusMenusItems(filter: {
          name:{
            eq: "Main menu"
          }
        }){
          edges{
            node{
              name
              items{
                title
                object_slug
              }
            }
          }
        }
      }
    `}
    render={props => (
    <div>
        {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item =>
            <Link to={`/${item.object_slug}`} key={item.title}>
                {item.title}
            </Link>)}
    </div>
    )}
  />
);
export default MainMenu;