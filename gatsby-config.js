module.exports = {
  // Customize your site metadata:
  siteMetadata: {
    title: "Nemea",
    author: "Lex Templeton",
    description: "Fuel for the driven.",
    siteUrl: "https://nemea.xyz/",
    social: [
      {
        name: "twitter",
        url: "https://twitter.com/nemeaxyz",
      },
      {
        name: "github",
        url: "https://github.com/nemeaXYZ",
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/layouts/baseLayout.js`),
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: "2287232254912143",
      },
    },
    `gatsby-plugin-stripe`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["Eina, Eina-SemiBold"],
          urls: ["/fonts/fonts.css"],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Drive, by Nemea`,
        short_name: `Nemea`,
        start_url: `/`,
        background_color: `#ffc93c`,
        theme_color: `#ffc93c`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
