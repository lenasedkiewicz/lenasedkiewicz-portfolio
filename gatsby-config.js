/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-transformer-remark',
    {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `projects`,
      path: `${__dirname}/src/projects/`,
    },
  },
],
  siteMetadata: {
    title: 'Lena Sedkiewicz',
    description: 'Your WordPress Developer',
    copyright: 'Copyright 2022 by Lena Sedkiewicz',
    contact: 'contact@msedkiewicz.pl',
  }
}
