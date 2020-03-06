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
        borderBottomColor: "surface",
        borderBottomWidth: 1,
        borderRightStyle: 0,
        borderRightColor: "surface",
        borderRightWidth: 1,
        backgroundColor: "background",
        color: "text",
        display: "flex",
        height: 1,
        p: theme => `${theme.space[2]}px ${theme.space[3]}px`,
        position: ["relative", "fixed"],
        width: "inherit",
        zIndex: 0,
      }}
    >
      {children}
    </div>
    <div sx={{ height: ["0px", 1] }} />
  </ThemeWrapper>
)

Toolbar.propTypes = {
  /** React children */
  children: PropTypes.any,
}
