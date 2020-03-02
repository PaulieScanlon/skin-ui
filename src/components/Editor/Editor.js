/** @jsx jsx */
import PropTypes from "prop-types"
import { jsx } from "theme-ui"
import { Box } from "@theme-ui/components"
import CodeMirror from "react-codemirror"

import "codemirror/lib/codemirror.css"
import "codemirror/mode/javascript/javascript"
import "codemirror/theme/nord.css"

export const Editor = ({ themeObject, onChange }) => (
  <Box
    sx={{
      ["> .ReactCodeMirror"]: {
        ["> .CodeMirror"]: {
          height: "100vh",
        },
      },
    }}
  >
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
)

Editor.propTypes = {
  /** The themeObject stored in state */
  themeObject: PropTypes.object.isRequired,
  /** CodeMirror onChange , passes event */
  onChange: PropTypes.func,
}
