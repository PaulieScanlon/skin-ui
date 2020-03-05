/** @jsx jsx */
import PropTypes from "prop-types"
import { jsx } from "theme-ui"
import { Box } from "@theme-ui/components"
import CodeMirror from "react-codemirror"

import "codemirror/lib/codemirror"
import "codemirror/lib/codemirror.css"
import "codemirror/mode/javascript/javascript"
import "codemirror/theme/nord.css"

export const Editor = ({ themeObject, onChange }) => {
  const handleChange = event => {
    try {
      return onChange(
        JSON.parse(event.replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g, '"$2": '))
      )
    } catch (e) {
      // if (e instanceof SyntaxError) {
      //   console.error("SyntaxError")
      // }
    }
  }
  return (
    <Box
      sx={{
        ["> .ReactCodeMirror"]: {
          ["> .CodeMirror"]: {
            height: theme => `calc(100vh - ${theme.sizes[1]})`,
          },
        },
      }}
    >
      <CodeMirror
        value={JSON.stringify(themeObject, null, 2).replace(
          /"(\w+)"\s*:/g,
          "$1:"
        )}
        onChange={event => handleChange(event)}
        options={{
          mode: { name: "javascript", json: true },
          theme: "nord",
          lineNumbers: true,
        }}
      />
    </Box>
  )
}

Editor.propTypes = {
  /** The themeObject stored in state */
  themeObject: PropTypes.object.isRequired,
  /** CodeMirror onChange , passes event */
  onChange: PropTypes.func,
}
