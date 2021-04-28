require('dotenv').config()
const env = process.env

module.exports = {
  siteMetadata: {
    title: `nauta`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `nauta`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // `gatsby-plugin-gatsby-cloud`,
    // {
    //   resolve: "gatsby-source-graphql",
    //   options: {
    //     typeName: "GraphCMS",
    //     fieldName: "gcms",
    //     url: env.GRAPHCMS_ENDPOINT,
    //   },
    // },
    {
      resolve: `gatsby-plugin-theme-ui`,
      options: {
        preset: "@theme-ui/preset-funk"
      }
    },
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-source-graphcms',
      options: {
        endpoint: env.GRAPHCMS_ENDPOINT,
      },
    },
  ],
}
