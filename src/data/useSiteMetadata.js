import { useStaticQuery, graphql } from "gatsby"

export const useSiteMetadata = () => {
  return useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            keywords
            url
            ogImage
            bgImage
            lang
            author
          }
        }
      }
    `
  )
}
