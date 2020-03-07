/** @jsx jsx */
import PropTypes from "prop-types"
import { jsx } from "theme-ui"
import { Box } from "@theme-ui/components"
import CodeMirror from "react-codemirror"

import { ThemeWrapper } from "../ThemeWrapper"
import { stringifyReplaceQuotes } from "../../utils/stringifyReplaceQuotes"
import { parseAddQuotes } from "../../utils/parseAddQuotes"

import "codemirror/lib/codemirror"
import "codemirror/lib/codemirror.css"
import "codemirror/mode/javascript/javascript"
import "codemirror/theme/isotope.css"

export const Editor = ({ themeObject, onChange }) => {
  const handleChange = event => {
    try {
      return onChange(parseAddQuotes(event))
    } catch (e) {
      // if (e instanceof SyntaxError) {
      //   console.error("SyntaxError")
      // }
    }
  }
  return (
    <ThemeWrapper>
      <Box
        sx={{
          ["> .ReactCodeMirror"]: {
            ["> .CodeMirror"]: {
              height: theme => [
                "100%",
                "100%",
                `calc(100vh - ${theme.sizes[2]})`,
              ],
            },
          },
        }}
      >
        <CodeMirror
          value={stringifyReplaceQuotes(themeObject)}
          onChange={event => handleChange(event)}
          options={{
            mode: { name: "javascript", json: true },
            theme: "isotope",
            lineNumbers: true,
          }}
        />
      </Box>
    </ThemeWrapper>
  )
}

Editor.propTypes = {
  /** The themeObject stored in state */
  themeObject: PropTypes.object.isRequired,
  /** CodeMirror onChange , passes event */
  onChange: PropTypes.func,
}
