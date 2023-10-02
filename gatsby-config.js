const dotenv = require("dotenv");
dotenv.config();

module.exports = {
    siteMetadata: {
        title: "tzavet",
        description: "a prologue.",
        author: "@advrxh",
    },
    plugins: [
        "gatsby-plugin-postcss",
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: process.env.SPACE_ID,
                accessToken: process.env.ACCESS_TOKEN,
            },
        },
    ],
};
