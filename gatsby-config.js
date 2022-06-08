require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
    siteMetadata: {
        title: `Amped Innovation`,
        description: `Powering new possibilities`,
        author: `Amped Innovation`,
        siteUrl: `https://www.ampedinnovation.com/`,
    },
    plugins: [
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: process.env.CONTENTFUL_SPACE_ID,
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
                host: process.env.CONTENTFUL_HOST,
            },
        },
        `gatsby-transformer-remark`,
        `gatsby-plugin-preload-fonts`,
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        "gatsby-plugin-styled-components",
        `gatsby-plugin-sharp`,
        `gatsby-plugin-robots-txt`,
        {
            resolve: `gatsby-plugin-canonical-urls`,
            options: {
                siteUrl: `https://www.ampedinnovation.com/`,
                stripQueryString: true,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: "gatsby-plugin-react-svg",
            options: {
                rule: {
                    include: /assets/,
                },
            },
        },
        {
            resolve: "gatsby-plugin-web-font-loader",
            options: {
                typekit: {
                    id: "fli5zny",
                },
                custom: {
                    families: ["Circular-Bold", "Circular-Book", "Circular-Regular", "Circular-Light"],
                    urls: ["/fonts/stylesheet.css"],
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
        {
            resolve: `gatsby-plugin-netlify`,
            options: {
                headers: {
                    "/public/*": ["cache-control: public, max-age=0, must-revalidate"],
                    "/public/static/*": ["cache-control: public, max-age=31536000, immutable"],
                    "/public/*.js": ["cache-control: public, max-age=31536000, immutable"],
                    "/public/*.css": ["cache-control: public, max-age=31536000, immutable"],
                    "/public/sw.js": ["cache-control: public, max-age=0, must-revalidate"],
                },
            },
        },
        {
            resolve: `gatsby-plugin-schema-snapshot`,
            options: {
                path: `schema.gql`,
                update: false,
            },
        },
    ],
};
