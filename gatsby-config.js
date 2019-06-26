require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `IELTS XL`,
    description: `Recources and services to help you get a great IELTS band score`,
    author: `Oliver`,
  },
  plugins: [
    `gatsby-plugin-stripe`,
    `gatsby-plugin-react-helmet`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("node-sass"),
    },
    

  },
  `gatsby-plugin-catch-links`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/src/pages`,
      name: `pages`
    }
  },
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      // CommonMark mode (default: true)
      commonmark: true,
      // Footnotes mode (default: true)
      footnotes: true,
      // Pedantic mode (default: true)
      pedantic: true,
      // GitHub Flavored Markdown mode (default: true)
      gfm: true,
      // Plugins configs
      plugins: [
        {
          resolve: `gatsby-remark-images`,
          options: {
            // It's important to specify the maxWidth (in pixels) of
            // the content container as this plugin uses this as the
            // base for generating different widths of each image.
            maxWidth: 650,
            linkImagesToOriginal: true,
            sizeByPixelDensity: true,
            showCaptions: false,
          }
        }
      ],
    }
  },
  {
    resolve: 'gatsby-plugin-google-fonts',
    options: {
      fonts: [
        'material icons',
        'roboto:300,400,500,700',
      ],
    },
  },
  {
    resolve: `gatsby-plugin-env-variables`,
    options: {
      whitelist: ["GATSBY_FIREBASE_API_KEY", "GATSBY_FIREBASE_AUTH_DOMAIN", "GATSBY_FIREBASE_DATABASE_URL", "GATSBY_FIREBASE_PROJECT_ID", "GATSBY_FIREBASE_STORAGE_BUCKET", "GATSBY_FIREBASE_MESSAGING_SENDER_ID"]
    },
  },
 
    

  

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
