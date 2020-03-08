module.exports = {
  siteMetadata: {
    title: `nude-ui`,
    description: `A theme-ui object editor`,
    keywords: [`gatsby`, `gatsbyjs`, `theme-ui`],
    url: `https://nude-ui.netlify.com`,
    ogImage: `images/nude-ui-open-graph-image.jpg`,
    bgImage: `images/nude-ui-background-image.jpg`,
    lang: `en`,
    author: `@pauliescanlon`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
  ],
}
