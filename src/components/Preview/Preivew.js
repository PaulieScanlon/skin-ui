/** @jsx jsx */
import PropTypes from "prop-types"
import { MDXProvider } from "@mdx-js/react"
import { ThemeProvider, jsx } from "theme-ui"
import { Box } from "@theme-ui/components"
import * as themeUiComponents from "@theme-ui/components"

export const Preview = ({ themeObject, children }) => (
  <ThemeProvider theme={themeObject}>
    <Box sx={{ backgroundColor: "background", p: 3 }}>
      <MDXProvider components={themeUiComponents}>{children}</MDXProvider>
    </Box>
  </ThemeProvider>
)

Preview.propTypes = {
  /** The themeObject stored in state */
  themeObject: PropTypes.object.isRequired,
  /** React children passed from mdx */
  children: PropTypes.any,
}
