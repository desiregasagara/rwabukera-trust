/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Rwabukera Trust Site`,
    siteUrl: `https://rwabukeratrust.com`
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
      icon: `src/images/innerlogo.png`
    },
  },      
  {
    resolve: `gatsby-omni-font-loader`,
    options: {
      enableListener: true,
      preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
      web: [
        {
          name: `Rowdies`,
          file: `https://fonts.googleapis.com/css2?family=Rowdies:wght@300;400;700&display=swap`,
        },
      ],
    },
  },
  `gatsby-plugin-sitemap`
]
};
