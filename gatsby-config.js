module.exports = {
  siteMetadata: {
    title: `Nude-UI`,
    description: `A theme-ui live preview and code editor`,
    keywords: [`gatsby`, `gatsbyjs`, `theme-ui`],
    url: `https://nude-ui.netlify.com`,
    ogImage: `images/nude-ui-open-graph-image.jpg`,
    bgImage: `images/nude-ui-background-image.jpg`,
    lang: `en`,
    author: `@pauliescanlon`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-76055934-9",
      },
    },
  ],
}
