/** @jsx jsx */
import PropTypes from "prop-types"
import { memo } from "react"
import { jsx } from "theme-ui"
import { Box } from "@theme-ui/components"
import CodeMirror from "react-codemirror"

import { ThemeWrapper } from "../ThemeWrapper"

if (typeof window !== `undefined`) {
  require("codemirror/mode/markdown/markdown")
  require("codemirror/theme/xq-light.css")
}

import mdxString from "!!raw-loader!../../pages/editor.mdx"

const deleteLines = (string, n = 1) => {
  return string.replace(new RegExp(`(?:.*?\n){${n - 1}}(?:.*?\n)`), "")
}

export const Source = memo(({ isFullScreen }) => {
  return (
    <ThemeWrapper>
      <Box
        sx={{
          height: theme => [
            "100%",
            "100%",
            "100%",
            `calc(100vh - ${isFullScreen ? 0 : theme.sizes.doubleHeader}px)`,
          ],
          ["> .ReactCodeMirror"]: {
            height: "100%",
            ["> .CodeMirror"]: {
              fontSize: 1,
              height: theme => [
                "100%",
                "100%",
                "100%",
                `calc(100vh - ${
                  isFullScreen ? 0 : theme.sizes.doubleHeader
                }px)`,
              ],
            },
          },
        }}
      >
        <CodeMirror
          value={deleteLines(mdxString, 4)}
          options={{
            mode: { name: "markdown", json: true },
            theme: "xq-light",
            readOnly: true,
          }}
        />
      </Box>
    </ThemeWrapper>
  )
})

Source.propTypes = {
  /** parent state isFullScreen */
  isFullScreen: PropTypes.bool,
}
