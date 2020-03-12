/** @jsx jsx */
import { useContext, memo } from "react"
import { jsx } from "theme-ui"
import { Box } from "@theme-ui/components"
import CodeMirror from "react-codemirror"

import { SkinContext } from "../../context"

import { ThemeWrapper } from "../ThemeWrapper"

if (typeof window !== `undefined`) {
  require("codemirror/mode/markdown/markdown")
  require("codemirror/theme/xq-light.css")
}

import mdxString from "!!raw-loader!../../pages/editor.mdx"

const deleteLines = (string, n = 1) => {
  return string.replace(new RegExp(`(?:.*?\n){${n - 1}}(?:.*?\n)`), "")
}

export const Source = memo(() => {
  const { state } = useContext(SkinContext)

  return (
    <ThemeWrapper>
      <Box
        sx={{
          height: theme => [
            "100%",
            "100%",
            "100%",
            `calc(100vh - ${
              state.isFullScreen ? 0 : theme.sizes.doubleHeader
            }px)`,
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
                  state.isFullScreen ? 0 : theme.sizes.doubleHeader
                }px)`,
              ],
            },
          },
        }}
      >
        {/* stackoverflow regex question:  */}
        {/* https://stackoverflow.com/questions/60634044/advanced-regex-help-required/60637381#60637381 */}
        <CodeMirror
          value={deleteLines(mdxString, 4).replace(
            /<section\s+className\=\{([^>]*)\}>([\s\S]*?)<\/section>\s*/gm,
            "<!-- $1 -->\n$2"
          )}
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
