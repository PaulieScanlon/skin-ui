/** @jsx jsx */
import { jsx } from "theme-ui"
import { Container, Button } from "theme-ui"
import netlifyIdentity from "netlify-identity-widget"

import { ThemeWrapper } from "../components/ThemeWrapper"
import { Seo } from "../components/Seo"
import { Header } from "../components/Header"

import { useSiteMetadata } from "../data/useSiteMetadata"

const LogoutLayout = () => {
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
        titleTemplate="Logout"
        description={description}
        url={url}
        ogImage={ogImage}
        path="/Logout"
        keywords={keywords}
        lang={lang}
      />

      <Header isNavOpen={true} />

      <main>
        <Container>
          <Button onClick={() => netlifyIdentity.logout()}>Logout</Button>
        </Container>
      </main>
    </ThemeWrapper>
  )
}

export default LogoutLayout
