import React, { memo } from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "theme-ui"

import theme from "../../theme"

export const ThemeWrapper = memo(({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
))

ThemeWrapper.propTypes = {
  /** React children */
  children: PropTypes.any,
}
