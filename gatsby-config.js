module.exports = {
  siteMetadata: {
    title: `nude-ui`,
    description: `A theme-ui object editor`,
    keywords: [`gatsby`, `gatsbyjs`, `theme-ui`],
    siteUrl: `https://nude-ui.netlify.com`,
    siteImage: `images/nude-ui-open-graph-image.jpg`,
    lang: `en`,
    author: `@pauliescanlon`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          default: require.resolve(`./src/layouts/index.js`),
        },
      },
    },
  ],
}
