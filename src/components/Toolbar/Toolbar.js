/** @jsx jsx */
import PropTypes from "prop-types"
import { jsx } from "theme-ui"

import { ThemeWrapper } from "../ThemeWrapper"

export const Toolbar = ({ children }) => (
  <ThemeWrapper>
    <div
      sx={{
        alignItems: "center",
        borderBottomStyle: 0,
        borderBottomColor: "darken",
        borderBottomWidth: 1,
        borderRightStyle: 0,
        borderRightColor: "darken",
        borderRightWidth: 1,
        backgroundColor: "background",
        color: "text",
        display: "flex",
        height: "header",
        p: theme => `${theme.space[2]}px ${theme.space[3]}px`,
        position: ["relative", "relative", "relative", "fixed"],
        width: "inherit",

        zIndex: theme => ["", "", theme.zIndices.toolbar],
      }}
    >
      {children}
    </div>
    <div sx={{ height: ["0px", "0px", "0px", "header"] }} />
  </ThemeWrapper>
)

Toolbar.propTypes = {
  /** React children */
  children: PropTypes.any,
}
