/** @jsx jsx */
import PropTypes from "prop-types"
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import * as themeUiComponents from "@theme-ui/components"

import { ThemeWrapper } from "../components/ThemeWrapper"
import { Header } from "../components/Header"

import { useSiteMetadata } from "../data/useSiteMetadata"

const IndexLayout = ({ children }) => {
  const {
    site: {
      siteMetadata: { url, bgImage },
    },
  } = useSiteMetadata()

  return (
    <ThemeWrapper>
      <Header isNavOpen={true} />
      <main
        sx={{
          p: theme => `${theme.space[2]}px ${theme.space[4]}px`,
        }}
      >
        <MDXProvider components={themeUiComponents}>{children}</MDXProvider>
      </main>
    </ThemeWrapper>
  )
}

IndexLayout.propTypes = {
  /** React children passed from mdx */
  children: PropTypes.any,
}

export default IndexLayout
