module.exports = {
  siteMetadata: {
    title: "MIDO. | Portfolio",
    description:
      "Mohammed Tantawy, also known as Mido Tawy, is a Software Engineer based in Australia, who specializes in developing high quality applications.",
    author: "Mohammed Tantawy",
    url: "https://motawy.me",
    keywords:
      "Mohammed Tantawy, Mido Tawy, Tantawy, motawy, software engineer, full-stack developer, javascript, cloud developer",
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Mohammed Tantawy",
        short_name: "Mido Tawy",
        start_url: "/",
        icon: "./static/favicon.ico",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            // https://www.gatsbyjs.org/packages/gatsby-remark-external-links
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "nofollow noopener noreferrer",
            },
          },
          {
            // https://www.gatsbyjs.org/packages/gatsby-remark-images
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 700,
              linkImagesToOriginal: true,
              quality: 90,
              tracedSVG: { color: "#64ffda" },
            },
          },
        ],
      },
    },
  ],
}
