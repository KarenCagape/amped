const path = require('path');

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `dumav1pp8cvg`,
        accessToken: `zllAe6nwHlB6MZriz219U8oWSOqG4ARsmVF8sNhPwM8`,
      },
    },
    `gatsby-plugin-preload-fonts`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    'gatsby-plugin-styled-components',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        typekit: {
          id: 'fli5zny',
        },
        custom: {
          families: [
            'Circular-Bold',
            'Circular-Book',
            'Circular-Regular',
            'Circular-Light',
          ],
          urls: ['/fonts/stylesheet.css'],
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/ico-logo.png`, // This path is relative to the root of the site.
      },
    },
  ],
};
