/** @jsx jsx */
import { Fragment } from "react"
import { useContext } from "react"
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import {
  Container,
  Flex,
  Box,
  Card,
  Button,
  Heading,
  Text,
  Spinner,
} from "@theme-ui/components"
import netlifyIdentity from "netlify-identity-widget"

import { gql } from "apollo-boost"
import { useQuery } from "@apollo/react-hooks"

import { SkinContext } from "../context"

import { ThemeWrapper } from "../components/ThemeWrapper"
import { Seo } from "../components/Seo"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"

import { useSiteMetadata } from "../data/useSiteMetadata"

const GET_THEMES_BY_USER = gql`
  query GetThemesByUserQuery($user_id: String!) {
    getThemesByUser(user_id: $user_id) {
      ref
      user_id
      theme_author
      theme_name
      theme_description
      theme_style
      theme_is_private
      theme_object
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
  // console.log("data: ", data.getThemesByUser)

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
            {state.user && (
              <Fragment>
                <Box sx={{ mb: 3 }}>
                  <Link sx={{ color: "secondary" }} to="/editor">
                    Create new theme
                  </Link>
                </Box>
                <Heading as="h1" variant="styles.h1">
                  {`${state.user.user_metadata.full_name}'s Themes`}
                </Heading>
                <Text>id: {state.user.id}</Text>
                <Text>email: {state.user.email}</Text>
              </Fragment>
            )}
          </Box>

          {loading && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                p: 4,
              }}
            >
              <Spinner />
            </Box>
          )}
          {error && <Text>{`${error}`}</Text>}
          {!loading && !error && (
            <Flex
              sx={{
                flexWrap: "wrap",
                ml: theme => `-${theme.space[2]}px`,
                mr: theme => `-${theme.space[2]}px`,
              }}
            >
              {data.getThemesByUser.map((item, index) => {
                return (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      flex: "1 1 auto",
                      flexDirection: "column",
                      mb: 3,
                      maxWidth: ["100%", "100%", "50%", "50%"],
                      width: ["100%", "100%", "50%", "50%"],
                    }}
                  >
                    <Link
                      to={`/editor?theme_id=${item.ref}`}
                      sx={{
                        textDecoration: "none",
                        display: "flex",
                        flex: "1 1 auto",
                        flexDirection: "column",
                        m: theme => `0px ${theme.space[2]}px`,
                        minHeight: "1px",
                      }}
                    >
                      <Card
                        sx={{
                          backgroundColor: "darken",
                          display: "flex",
                          flex: "1 1 auto",
                          flexDirection: "column",
                          minHeight: "1px",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flex: "1 1 auto",
                            flexDirection: "column",
                            p: 3,
                          }}
                        >
                          {item.theme_is_private ? (
                            <Text
                              sx={{
                                color: "muted",
                              }}
                            >
                              Is Private
                            </Text>
                          ) : null}
                          <Heading
                            as="h2"
                            variant="styles.h2"
                            sx={{ color: "text", mb: 2 }}
                          >
                            {item.theme_name}
                          </Heading>
                          <Text sx={{ color: "text" }}>
                            {item.theme_description}
                          </Text>
                          <Text sx={{ color: "text", fontSize: 0 }}>
                            {`ref: ${item.ref}`}
                          </Text>
                          <Text sx={{ color: "text", fontSize: 0 }}>
                            {`theme_object: ${typeof item.theme_object}`}
                          </Text>
                        </Box>
                        <Box sx={{ p: 3 }}>
                          <Text sx={{ color: "text" }}>{item.theme_style}</Text>
                          <Text
                            sx={{
                              color: "secondary",
                              textDecoration: "underline",
                            }}
                          >
                            View Theme
                          </Text>
                        </Box>
                      </Card>
                    </Link>
                  </Box>
                )
              })}
            </Flex>
            // <Box sx={{ mb: 3 }}>
            //   <pre>{JSON.stringify(data, null, 2)}</pre>
            // </Box>
          )}

          {/* <Box sx={{ mb: 3 }}>
            <Button onClick={() => netlifyIdentity.open()} sx={{ mb: 4 }}>
              {`${state.user && state.user ? "Logout" : "Login"}`}
            </Button>
          </Box> */}
        </Container>
      </main>
      <Footer />
    </ThemeWrapper>
  )
}

export default Test
