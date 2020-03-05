/** @jsx jsx */
import { useState, Fragment } from "react"
import PropTypes from "prop-types"
import { ThemeProvider, jsx } from "theme-ui"
import { Flex, Box } from "@theme-ui/components"

import { Header } from "../components/Header"
import { Editor } from "../components/Editor"
import { Preview } from "../components/Preview"

import theme from "../theme"
import defaultThemeObject from "../utils/defaultThemeObject"

const IndexPage = ({ children }) => {
  const [themeObject, setThemeObject] = useState(defaultThemeObject)

  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <Header>header</Header>
        <div sx={{ height: 1 }} />
      </ThemeProvider>
      <Flex sx={{ flexWrap: "wrap" }}>
        <Box sx={{ width: ["100%", "60%"] }}>
          <Preview themeObject={themeObject} children={children} />
        </Box>
        <Box
          sx={{
            position: ["relative", "fixed"],
            left: ["0%", "60%"],
            width: ["100%", "40%"],
          }}
        >
          <ThemeProvider theme={theme}>
            <Editor
              themeObject={themeObject}
              onChange={event => setThemeObject(JSON.parse(event))}
            />
          </ThemeProvider>
        </Box>
      </Flex>
    </Fragment>
  )
}

IndexPage.propTypes = {
  /** React children passed from mdx */
  children: PropTypes.any,
}

export default IndexPage
