/** @jsx jsx */
import { useState } from "react"
import PropTypes from "prop-types"
import { jsx } from "theme-ui"
import { Flex, Box } from "@theme-ui/components"

import { Editor } from "../components/Editor"
import { Preview } from "../components/Preview"
import defaultThemeObject from "../utils/defaultThemeObject"

const IndexPage = ({ children }) => {
  const [themeObject, setThemeObject] = useState(defaultThemeObject)

  return (
    <Flex sx={{ flexWrap: "wrap" }}>
      <Box sx={{ width: ["100%", "50%"] }}>
        <Preview themeObject={themeObject} children={children} />
      </Box>
      <Box
        sx={{
          position: "fixed",
          left: ["100%", "50%"],
          width: ["100%", "50%"],
        }}
      >
        <Editor
          themeObject={themeObject}
          onChange={event => setThemeObject(JSON.parse(event))}
        />
      </Box>
    </Flex>
  )
}

IndexPage.propTypes = {
  /** React children passed from mdx */
  children: PropTypes.any,
}

export default IndexPage
