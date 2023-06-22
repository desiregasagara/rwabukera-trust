/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Rwabukera Trust Site`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp","gatsby-plugin-sass","gatsby-plugin-modal-routing","gatsby-plugin-anchor-links", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Rwabukera Trust`,
      short_name: `rwabukeratrust`,
      start_url: `/`,
      background_color: `#000`,
      theme_color: `#000`,
      display: `standalone`,
      icon: `src/images/favicon.png`
    },
  },        
  {
    resolve:'gatsby-plugin-create-client-paths',
    //Anything added here is going to be a client only route
    options:{prefixes:['/app/*']},
  },
  `gatsby-plugin-sitemap`
]
};
