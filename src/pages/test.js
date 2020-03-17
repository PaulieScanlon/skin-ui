/** @jsx jsx */
import { Fragment } from "react"
import { useContext } from "react"
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { Container, Button, Text } from "theme-ui"
import netlifyIdentity from "netlify-identity-widget"

import { gql } from "apollo-boost"
import { useQuery } from "@apollo/react-hooks"

import { SkinContext } from "../context"

import { ThemeWrapper } from "../components/ThemeWrapper"
import { Seo } from "../components/Seo"
import { Header } from "../components/Header"

import { useSiteMetadata } from "../data/useSiteMetadata"
import { Box } from "@theme-ui/components"

const GET_THEMES_BY_USER = gql`
  query GetAllUsersQuery($user_id: String!) {
    getThemesByUser(user_id: $user_id) {
      user_id
      theme_author
      theme_name
      theme_description
      theme_style
      theme_is_private
    }
  }
`

const Test = () => {
  const { state } = useContext(SkinContext)

  const { loading, error, data } = useQuery(GET_THEMES_BY_USER, {
    variables: { user_id: (state.user && state.user.id) || "" },
  })

  // console.log("loading: ", loading)
  // console.log("error: ", error)
  // console.log("data: ", data)

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
          <Box sx={{ mb: 3 }}>
            <Button onClick={() => netlifyIdentity.open()} sx={{ mb: 4 }}>
              {`${state.user && state.user ? "Logout" : "Login"}`}
            </Button>
          </Box>
          <Box sx={{ mb: 3 }}>
            {state.user && (
              <Fragment>
                <Text>id: {state.user.id}</Text>
                <Text>full_name: {state.user.user_metadata.full_name}</Text>
                <Text>email: {state.user.email}</Text>
              </Fragment>
            )}
          </Box>

          {loading ? <Text>Loading</Text> : null}
          {error ? <Text>{`${error}`}</Text> : null}
          {!loading && !error && (
            <Box sx={{ mb: 3 }}>
              <pre>{JSON.stringify(data, null, 2)}</pre>
            </Box>
          )}

          <Box sx={{ mb: 3 }}>
            <Link sx={{ color: "secondary" }} to="/editor">
              Go to Editor
            </Link>
          </Box>
        </Container>
      </main>
    </ThemeWrapper>
  )
}

export default Test
