/** @jsx jsx */
import { useContext, useState, useEffect } from "react"
import { jsx } from "theme-ui"
import { Box } from "@theme-ui/components"
import { Controlled as CodeMirror } from "react-codemirror2"
import { useDebounce } from "use-debounce"

import { SkinContext } from "../../context"

import { ThemeWrapper } from "../ThemeWrapper"
import { stringifyReplaceQuotes } from "../../utils/stringifyReplaceQuotes"
import { parseAddQuotes } from "../../utils/parseAddQuotes"

if (typeof window !== `undefined`) {
  require("codemirror/mode/javascript/javascript")
  require("codemirror/theme/isotope.css")
}

import { UPDATE_DEFAULT_THEME_OBJECT } from "../../utils/const"

export const Editor = () => {
  const { state, dispatch } = useContext(SkinContext)

  const [localThemeObject, setLocalThemeObject] = useState(
    stringifyReplaceQuotes(state.defaultThemeObject)
  )
  const [debouncedLocalThemeObject] = useDebounce(localThemeObject, 300)

  useEffect(() => {
    setLocalThemeObject(stringifyReplaceQuotes(state.defaultThemeObject))
  }, [state.defaultThemeObject])

  useEffect(() => {
    try {
      dispatch({
        type: UPDATE_DEFAULT_THEME_OBJECT,
        defaultThemeObject: parseAddQuotes(debouncedLocalThemeObject),
      })
    } catch (e) {
      // TODO handle errors with an alert or something
      // console.error("SyntaxError")
    }
  }, [debouncedLocalThemeObject])

  const conditionalHeight = state.isEditorHeightCollapsed ? "50vh" : "100%"

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
          ["> .react-codemirror2"]: {
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
          value={localThemeObject}
          onBeforeChange={(editor, data, value) => setLocalThemeObject(value)}
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
}
