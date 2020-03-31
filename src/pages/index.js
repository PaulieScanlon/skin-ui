/** @jsx jsx */
import PropTypes from "prop-types"
import { jsx } from "theme-ui"
import { transparentize } from "@theme-ui/color"
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Link,
  Image,
} from "@theme-ui/components"

import { ThemeWrapper } from "../components/ThemeWrapper"
import { Seo } from "../components/Seo"
import { Header } from "../components/Header"
import { Logo } from "../components/Logo"
import { TopNav } from "../components/TopNav"
import { Footer } from "../components/Footer"
import { SvgIcon } from "../components/SvgIcon"

import { PREVIEW_ICON, SOURCE_ICON, SAVE_ICON } from "../utils/iconPaths"

import { useSiteMetadata } from "../data/useSiteMetadata"

const IndexLayout = () => {
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

      <Header
        left={
          <Flex>
            <Logo />
            <TopNav />
          </Flex>
        }
      />
      <main>
        <Box>
          <Container>
            <Flex sx={{ flexWrap: "wrap", minHeight: 430 }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  width: ["100%", "100%", "50%", "50%"],
                }}
              >
                <Image
                  sx={{ mb: [5, 5, 0, 0], boxShadow: 4 }}
                  alt="Skin UI"
                  src={`${url}/${ogImage}`}
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  mb: [5, 5, 0, 0],
                  p: theme => [
                    "0px",
                    "0px",
                    `0px ${theme.space[5]}px`,
                    `0px ${theme.space[5]}px`,
                  ],
                  width: ["100%", "100%", "50%", "50%"],
                  wordBreak: "initial",
                }}
              >
                <Heading as="h1" variant="styles.h1">
                  Skin UI
                </Heading>
                <Box
                  as="span"
                  sx={{
                    mb: 3,
                  }}
                >
                  <Link
                    title="Theme UI"
                    href="https://theme-ui.com/"
                    target="_blank"
                    sx={{ color: "text" }}
                  >
                    A Theme UI
                  </Link>
                  <Text
                    as="span"
                    sx={{ color: "primary", display: "inline", ml: 2, mr: 2 }}
                  >
                    Live Preview
                  </Text>
                  and
                  <Text
                    as="span"
                    sx={{ color: "accent", display: "inline", ml: 2 }}
                  >
                    Code Editor.
                  </Text>
                </Box>
                <Flex>
                  <Link href="/editor" sx={{ mr: 2, textDecoration: "none" }}>
                    <Button
                      title="Get Started"
                      tabIndex={-1}
                      variant="secondary"
                    >
                      Get started
                    </Button>
                  </Link>

                  <Link
                    title="GitHub Repo"
                    href="https://github.com/PaulieScanlon/skin-ui"
                    target="_blank"
                    sx={{ textDecoration: "none" }}
                  >
                    <Button tabIndex={-1} variant="ghost">
                      GitHub
                    </Button>
                  </Link>
                </Flex>
              </Box>
            </Flex>
          </Container>
        </Box>

        <Box sx={{ backgroundColor: transparentize("gray", 0.6) }}>
          <Container>
            <Flex sx={{ flexWrap: "wrap" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  my: 5,
                  p: theme => [
                    "0px",
                    "0px",
                    `0px ${theme.space[5]}px`,
                    `0px ${theme.space[5]}px`,
                  ],
                  width: ["100%", "100%", "50%", "50%"],
                  wordBreak: "initial",
                }}
              >
                <Heading
                  variant="styles.h2"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  Live Preview
                  <SvgIcon sx={{ ml: 3 }} iconPath={SOURCE_ICON} />
                </Heading>
                <Box>
                  Skin UI provides a starting point to help you style markdown
                  and
                  <Link
                    href="https://theme-ui.com/components"
                    target="_blank"
                    sx={{ color: "text", ml: 2 }}
                  >
                    Theme UI components
                  </Link>
                  . Changes to the Theme UI style object update live, and once
                  you're done
                  <Text
                    as="span"
                    sx={{ display: "inline", color: "primary", ml: 2, mr: 2 }}
                  >
                    Copy
                  </Text>
                  the theme object into your own project.
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  mb: [5, 5, 0, 0],
                  width: ["100%", "100%", "50%", "50%"],
                }}
              >
                <Image
                  sx={{ boxShadow: 4 }}
                  alt="Skin UI Editor"
                  src={`${url}/images/skin-ui-editor-image.jpg`}
                />
              </Box>
            </Flex>
          </Container>
        </Box>

        <Box sx={{ backgroundColor: transparentize("black", 0.6) }}>
          <Container>
            <Flex sx={{ flexWrap: "wrap", flexDirection: "row-reverse" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  my: 5,
                  p: theme => [
                    "0px",
                    "0px",
                    `0px ${theme.space[5]}px`,
                    `0px ${theme.space[5]}px`,
                  ],
                  width: ["100%", "100%", "50%", "50%"],
                  wordBreak: "initial",
                }}
              >
                <Heading
                  variant="styles.h2"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  Source
                  <SvgIcon sx={{ ml: 3 }} iconPath={PREVIEW_ICON} />
                </Heading>
                <Box>
                  Inspect the
                  <code
                    sx={{
                      fontSize: "1.1rem",
                      p: 1,
                      backgroundColor: "gray",
                      ml: 2,
                      mr: 2,
                    }}
                  >
                    .md
                  </code>
                  and
                  <code
                    sx={{
                      fontSize: "1.1rem",
                      p: 1,
                      backgroundColor: "gray",
                      ml: 2,
                      mr: 2,
                    }}
                  >
                    .mdx
                  </code>
                  for markdown and
                  <Link
                    href="https://theme-ui.com/components"
                    target="_blank"
                    sx={{ color: "text", ml: 2, mr: 2 }}
                  >
                    Theme UI components
                  </Link>
                  Use it for reference or
                  <Text
                    as="span"
                    sx={{ display: "inline", color: "primary", ml: 2, mr: 2 }}
                  >
                    Copy
                  </Text>
                  it into your own project.
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  mb: [5, 5, 0, 0],
                  width: ["100%", "100%", "50%", "50%"],
                }}
              >
                <Image
                  sx={{ boxShadow: 4 }}
                  alt="Skin UI Src"
                  src={`${url}/images/skin-ui-source-image.jpg`}
                />
              </Box>
            </Flex>
          </Container>
        </Box>

        <Box sx={{ backgroundColor: transparentize("gray", 0.6) }}>
          <Container>
            <Flex sx={{ flexWrap: "wrap" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  my: 5,
                  p: theme => [
                    "0px",
                    "0px",
                    `0px ${theme.space[5]}px`,
                    `0px ${theme.space[5]}px`,
                  ],
                  width: ["100%", "100%", "50%", "50%"],
                  wordBreak: "initial",
                }}
              >
                <Heading
                  variant="styles.h2"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  Sign up to save!
                  <SvgIcon sx={{ ml: 3 }} iconPath={SAVE_ICON} />
                </Heading>
                <Box>
                  With a Sign up or Login you can
                  <Text
                    as="span"
                    sx={{ display: "inline", color: "primary", ml: 2, mr: 2 }}
                  >
                    save
                  </Text>
                  your theme and come back to it later, or use the link to
                  <Text
                    as="span"
                    sx={{ display: "inline", color: "accent", ml: 2, mr: 2 }}
                  >
                    share
                  </Text>
                  your theme around.
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  mb: [5, 5, 0, 0],
                  width: ["100%", "100%", "50%", "50%"],
                }}
              >
                <Image
                  sx={{ boxShadow: 4 }}
                  alt="Skin UI Editor"
                  src={`${url}/images/skin-ui-save-image.jpg`}
                />
              </Box>
            </Flex>
          </Container>
        </Box>
      </main>
      <Text
        sx={{
          color: "muted",
          display: "flex",
          fontSize: 0,
          p: 3,
        }}
      >
        Photo Credit:{" "}
        <Link
          title="@dynamicwang"
          sx={{ color: "muted", ml: 2 }}
          href="https://unsplash.com/@dynamicwang"
          target="_blank"
        >
          @dynamicwang
        </Link>
      </Text>
      <Footer />
    </ThemeWrapper>
  )
}

IndexLayout.propTypes = {
  /** React children passed from parent */
  props: PropTypes.any,
}

export default IndexLayout
