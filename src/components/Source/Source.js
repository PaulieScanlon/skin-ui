/** @jsx jsx */
import { jsx } from "theme-ui"
import { Box } from "@theme-ui/components"
import CodeMirror from "react-codemirror"

import { ThemeWrapper } from "../ThemeWrapper"

import "codemirror/lib/codemirror"
import "codemirror/lib/codemirror.css"
import "codemirror/mode/markdown/markdown"

import mdxString from "!!raw-loader!../../pages/index.mdx"

export const Source = () => {
  return (
    <ThemeWrapper>
      <Box
        sx={{
          ["> .ReactCodeMirror"]: {
            ["> .CodeMirror"]: {
              height: theme => [
                "100%",
                "100%",
                "100%",
                `calc(100vh - ${theme.sizes[2]})`,
              ],
            },
          },
        }}
      >
        <CodeMirror
          value={mdxString}
          options={{
            mode: { name: "markdown", json: true },
          }}
        />
      </Box>
    </ThemeWrapper>
  )
}
