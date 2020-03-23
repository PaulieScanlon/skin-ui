/** @jsx jsx */
import { useContext, useState, useEffect } from "react"
import { jsx } from "theme-ui"
import { Box } from "@theme-ui/components"
import { Controlled as CodeMirror } from "react-codemirror2"

import { SkinContext } from "../../context"

import { ThemeWrapper } from "../ThemeWrapper"
import { replaceQuotes } from "../../utils/replaceQuotes"
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

  // console.log(replaceQuotes(state.defaultThemeObject))
  console.log(stringifyReplaceQuotes(state.defaultThemeObject))

  useEffect(() => {
    // setLocalThemeObject(replaceQuotes(state.defaultThemeObject))
    setLocalThemeObject(stringifyReplaceQuotes(state.defaultThemeObject))
  }, [state.defaultThemeObject])

  useEffect(() => {
    try {
      parseAddQuotes(localThemeObject)
      dispatch({
        type: UPDATE_DEFAULT_THEME_OBJECT,
        defaultThemeObject: parseAddQuotes(localThemeObject),
      })
      // console.log("Skin UI ok!")
    } catch (e) {
      if (e instanceof SyntaxError) {
        console.error("Skin UI Syntax Error")
      }
    }
  }, [localThemeObject])

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
          // onKeyDown={(editor, data, value) => {
          //   console.log(value)
          //   try {
          //     dispatch({
          //       type: UPDATE_DEFAULT_THEME_OBJECT,
          //       defaultThemeObject: parseAddQuotes(value),
          //     })
          //   } catch (e) {
          //     console.error("Skin UI Syntax Error")
          //   }
          // }}
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
