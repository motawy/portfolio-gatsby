module.exports = {
    siteMetadata: {
        title: 'MIDO. | Portfolio',
        description:
            'Mohammed Tantawy, also known as Mido, is a Full-Stack Developer based in Australia, who specializes in developing high quality applications.',
        author: 'Mohammed Tantawy',
        url: 'https://motawy.me',
        keywords:
            'Mohammed Tantawy, Mido, Tantawy, motawy, software engineer, full-stack developer, javascript, cloud developer',
        image: '/images/siteImage.png',
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-offline`,
        `gatsby-plugin-styled-components`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: 'Mohammed Tantawy',
                short_name: 'Mido',
                start_url: '/',
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: './static/favicon.ico',
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'content',
                path: `${__dirname}/content/`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        // https://www.gatsbyjs.org/packages/gatsby-remark-external-links
                        resolve: 'gatsby-remark-external-links',
                        options: {
                            target: '_blank',
                            rel: 'nofollow noopener noreferrer',
                        },
                    },
                    {
                        // https://www.gatsbyjs.org/packages/gatsby-remark-images
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 700,
                            linkImagesToOriginal: true,
                            quality: 90,
                            tracedSVG: true,
                        },
                    },
                ],
            },
        },
    ],
};
