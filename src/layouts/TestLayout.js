/** @jsx jsx */
import { useContext } from "react"
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { Container, Button } from "theme-ui"
import netlifyIdentity from "netlify-identity-widget"

import { SkinContext } from "../context"

import { ThemeWrapper } from "../components/ThemeWrapper"
import { Seo } from "../components/Seo"
import { Header } from "../components/Header"

import { useSiteMetadata } from "../data/useSiteMetadata"
import { Box } from "@theme-ui/components"

const TestLayout = () => {
  const { state } = useContext(SkinContext)

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
      },
    },
  } = useSiteMetadata()

  return (
    <ThemeWrapper>
      <Seo
        author={author}
        title={title}
        titleTemplate="Test"
        description={description}
        url={url}
        ogImage={ogImage}
        path="/test"
        keywords={keywords}
        lang={lang}
      />

      <Header />

      <main>
        <Container>
          <Box>
            <Button onClick={() => netlifyIdentity.open()} sx={{ mb: 4 }}>
              {`${state.user && state.user ? "Logout" : "Login"}`}
            </Button>
          </Box>
          <Box>
            <Link sx={{ color: "secondary" }} to="/editor">
              Go to Editor
            </Link>
          </Box>
        </Container>
      </main>
    </ThemeWrapper>
  )
}

export default TestLayout
