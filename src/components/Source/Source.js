/** @jsx jsx */
import { jsx } from "theme-ui"
import { Box } from "@theme-ui/components"
import CodeMirror from "react-codemirror"

import { ThemeWrapper } from "../ThemeWrapper"

if (typeof window !== `undefined`) {
  require("codemirror/lib/codemirror")
  require("codemirror/lib/codemirror.css")
  require("codemirror/mode/markdown/markdown")
  require("codemirror/theme/xq-light.css")
}

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
            theme: "xq-light",
          }}
        />
      </Box>
    </ThemeWrapper>
  )
}
