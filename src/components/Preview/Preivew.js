/** @jsx jsx */
import { useContext, memo } from "react"
import PropTypes from "prop-types"
import { MDXProvider } from "@mdx-js/react"
import { ThemeProvider, jsx } from "theme-ui"
import { Box } from "@theme-ui/components"

import { SkinContext } from "../../context"

import { checkAndParse } from "../../utils/checkAndParse"

import * as themeUiComponents from "@theme-ui/components"

export const Preview = memo(({ children }) => {
  const { state } = useContext(SkinContext)

  const checkBeforeProvider = () => {
    try {
      console.log("Skin UI ok!")
      return checkAndParse(state.defaultThemeObject)
    } catch (e) {
      if (e instanceof SyntaxError) {
        // console.error("Skin UI Syntax Error")
      }
    }
  }

  return (
    <ThemeProvider theme={checkBeforeProvider()}>
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
