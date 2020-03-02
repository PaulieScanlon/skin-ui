module.exports = {
  siteMetadata: {
    title: `...`,
    description: `...`,
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
