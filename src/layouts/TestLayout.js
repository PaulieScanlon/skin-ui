/** @jsx jsx */
import { useContext } from "react"
import { jsx } from "theme-ui"
import { Container, Button } from "theme-ui"
import netlifyIdentity from "netlify-identity-widget"

import { SkinContent, SkinContext } from "../context"

import { ThemeWrapper } from "../components/ThemeWrapper"
import { Seo } from "../components/Seo"
import { Header } from "../components/Header"

import { useSiteMetadata } from "../data/useSiteMetadata"

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

      <Header isNavOpen={true} />

      <main>
        <Container>
          <Button onClick={() => netlifyIdentity.open()}>
            {`${state.user && state.user ? "Logout" : "Login"}`}
          </Button>
        </Container>
      </main>
    </ThemeWrapper>
  )
}

export default TestLayout
