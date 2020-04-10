module.exports = {
  siteMetadata: {
    title: "MIDO. | Portfolio",
    description:
      "Welcome to my portfolio website. My name is Mohammed Tantawy and I'm a Full-Stack Developer, Cloud Engineer and Data Analyst.",
    author: "Mohammed Tantawy",
    url: "https://motawy.me",
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "images",
      },
    },
  ],
}
