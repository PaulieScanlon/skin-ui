/** @jsx jsx */
import { useContext, useState, useEffect } from "react"
import { jsx } from "theme-ui"
import { Box } from "@theme-ui/components"
import { Controlled as CodeMirror } from "react-codemirror2"

import { SkinContext } from "../../context"

import { ThemeWrapper } from "../ThemeWrapper"

if (typeof window !== `undefined`) {
  require("codemirror/mode/javascript/javascript")
  require("codemirror/theme/isotope.css")
}

import { UPDATE_DEFAULT_THEME_OBJECT } from "../../utils/const"

export const Editor = () => {
  const { state, dispatch } = useContext(SkinContext)

  const handleEditorChange = value => {
    dispatch({
      type: UPDATE_DEFAULT_THEME_OBJECT,
      defaultThemeObject: value,
    })
  }

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
          value={state.defaultThemeObject}
          onBeforeChange={(editor, data, value) => handleEditorChange(value)}
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
