/** @jsx jsx */
import PropTypes from "prop-types"
import { jsx } from "theme-ui"
import { MDXProvider } from "@mdx-js/react"
import * as themeUiComponents from "@theme-ui/components"

import { ThemeWrapper } from "../components/ThemeWrapper"
import { Seo } from "../components/Seo"
import { Header } from "../components/Header"

import { useSiteMetadata } from "../data/useSiteMetadata"

const IndexLayout = ({ children }) => {
  const {
    site: {
      siteMetadata: {
        author,
        title,
        description,
        url,
        ogImage,
        keywords,
        lang,
        bgImage,
      },
    },
  } = useSiteMetadata()

  return (
    <ThemeWrapper>
      <Seo
        author={author}
        title={title}
        titleTemplate="Home"
        description={description}
        url={url}
        ogImage={ogImage}
        path="/"
        keywords={keywords}
        lang={lang}
      />
      <img
        alt={url}
        sx={{
          backgroundImage: `url(${url}/${bgImage})`,
          backgroundSize: "cover",
          border: "none",
          position: "fixed",
          height: "100vh",
          width: "max",
          zIndex: -1,
        }}
      />
      <Header isNavOpen={true} />
      <main
        sx={{
          p: [3, 4, 6, 6],
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
