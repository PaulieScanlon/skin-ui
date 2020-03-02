/** @jsx jsx */
import PropTypes from "prop-types"
import { ThemeProvider, jsx } from "theme-ui"
import { Box } from "@theme-ui/components"
import CodeMirror from "react-codemirror"

import theme from "../../theme"

import "codemirror/lib/codemirror.css"
import "codemirror/mode/javascript/javascript"
import "codemirror/theme/nord.css"

export const Editor = ({ themeObject, onChange }) => (
  <ThemeProvider theme={theme}>
    <Box
      sx={{
        ["> .ReactCodeMirror"]: {
          ["> .CodeMirror"]: {
            height: "100vh",
          },
        },
      }}
    >
      <Box sx={{ backgroundColor: "background", p: 2 }}>
        <h4 sx={{ color: "primary" }}>Editor</h4>
      </Box>
      <CodeMirror
        value={JSON.stringify(themeObject, null, 2)}
        onChange={event => onChange(event)}
        options={{
          mode: "javascript",
          theme: "nord",
          lineNumbers: true,
        }}
      />
    </Box>
  </ThemeProvider>
)

Editor.propTypes = {
  /** The themeObject stored in state */
  themeObject: PropTypes.object.isRequired,
  /** CodeMirror onChange , passes event */
  onChange: PropTypes.func,
}
