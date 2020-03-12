/** @jsx jsx */
import { useContext, memo } from "react"
import PropTypes from "prop-types"
import { jsx } from "theme-ui"
import { Box } from "@theme-ui/components"
import CodeMirror from "react-codemirror"

import { SkinContext } from "../../context"

import { ThemeWrapper } from "../ThemeWrapper"
import { stringifyReplaceQuotes } from "../../utils/stringifyReplaceQuotes"
import { parseAddQuotes } from "../../utils/parseAddQuotes"

if (typeof window !== `undefined`) {
  require("codemirror/mode/javascript/javascript")
  require("codemirror/theme/isotope.css")
}

export const Editor = memo(({ themeObject, onChange }) => {
  const { state } = useContext(SkinContext)
  const conditionalHeight = state.isEditorHeightCollapsed ? "50vh" : "100%"

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
          backgroundColor: "black",
          height: theme => [
            `${conditionalHeight}`,
            `${conditionalHeight}`,
            `${conditionalHeight}`,
            `calc(100vh - ${theme.sizes.doubleHeader}px)`,
          ],
          ["> .ReactCodeMirror"]: {
            textarea: {
              opacity: 0,
            },
            ["> .CodeMirror"]: {
              height: theme => [
                `${conditionalHeight}`,
                `${conditionalHeight}`,
                `${conditionalHeight}`,
                `calc(100vh - ${theme.sizes.doubleHeader}px)`,
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
            viewportMargin: Infinity,
            tabindex: -1,
          }}
        />
      </Box>
    </ThemeWrapper>
  )
})

Editor.propTypes = {
  /** The themeObject stored in state */
  themeObject: PropTypes.object.isRequired,
  /** CodeMirror onChange , passes event */
  onChange: PropTypes.func,
}
