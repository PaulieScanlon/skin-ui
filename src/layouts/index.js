/** @jsx jsx */
import { Fragment, useState } from "react"
import { ThemeProvider, jsx } from "theme-ui"
// import AceEditor from "react-ace"
import CodeMirror from "react-codemirror"
import { Flex, Box } from "@theme-ui/components"
import theme from "../theme"
import defaultThemeObject from "../utils/defaultThemeObject"

// require("ace-builds/src-noconflict/theme-github")
// require("ace-builds/src-noconflict/mode-java")
import "codemirror/lib/codemirror.css"
import "codemirror/mode/javascript/javascript"
import "codemirror/theme/nord.css"

// const stringifyAndStrip = theme =>
//   JSON.stringify(theme, null, 3).replace(/\"/g, "")

const IndexPage = ({ children }) => {
  const [themeObject, setThemeObject] = useState(defaultThemeObject)

  return (
    <Fragment>
      <Flex sx={{ flexWrap: "wrap" }}>
        <ThemeProvider theme={themeObject}>
          <Box
            sx={{ backgroundColor: "background", p: 2, width: ["100%", "50%"] }}
          >
            {children}
          </Box>
        </ThemeProvider>
        <ThemeProvider theme={theme}>
          <Box
            sx={{
              width: ["100%", "50%"],
              ["> .ReactCodeMirror"]: {
                ["> .CodeMirror"]: {
                  height: "100%",
                },
              },
            }}
          >
            <Box sx={{ p: 2 }}>
              <h4 sx={{ pl: 4, color: "primary" }}>Editor</h4>
            </Box>
            <CodeMirror
              value={JSON.stringify(themeObject, null, 2)}
              onChange={event => setThemeObject(JSON.parse(event))}
              options={{
                mode: "javascript",
                theme: "nord",
                lineNumbers: true,
              }}
            />
          </Box>
        </ThemeProvider>
      </Flex>
    </Fragment>
  )
}

export default IndexPage
