/** @jsx jsx */
import { useContext, memo } from "react"
import PropTypes from "prop-types"
import { MDXProvider } from "@mdx-js/react"
import { ThemeProvider, jsx } from "theme-ui"
import { Box } from "@theme-ui/components"

import { SkinContext } from "../../context"

import * as themeUiComponents from "@theme-ui/components"

export const Preview = memo(({ children }) => {
  const { state } = useContext(SkinContext)

  return (
    <ThemeProvider theme={state.defaultThemeObject}>
      <Box sx={{ backgroundColor: "background", p: 3 }}>
        <MDXProvider components={themeUiComponents}>{children}</MDXProvider>
      </Box>
    </ThemeProvider>
  )
})

Preview.propTypes = {
  /** React children passed from mdx */
  children: PropTypes.any,
}
