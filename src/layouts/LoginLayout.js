/** @jsx jsx */
import { jsx } from "theme-ui"
import { Container, Button } from "theme-ui"
import netlifyIdentity from "netlify-identity-widget"

import { ThemeWrapper } from "../components/ThemeWrapper"
import { Seo } from "../components/Seo"
import { Header } from "../components/Header"

import { useSiteMetadata } from "../data/useSiteMetadata"

const LoginLayout = () => {
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
        titleTemplate="Login"
        description={description}
        url={url}
        ogImage={ogImage}
        path="/Login"
        keywords={keywords}
        lang={lang}
      />

      <Header isNavOpen={true} />

      <main>
        <Container>
          <Button onClick={() => netlifyIdentity.open()}>Login</Button>
        </Container>
      </main>
    </ThemeWrapper>
  )
}

export default LoginLayout
