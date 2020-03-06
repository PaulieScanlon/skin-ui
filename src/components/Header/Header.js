/** @jsx jsx */
import PropTypes from "prop-types"
import { jsx } from "theme-ui"
import { ThemeWrapper } from "../ThemeWrapper"

export const Header = ({ children }) => (
  <ThemeWrapper>
    <header
      sx={{
        alignItems: "center",
        borderBottomStyle: 0,
        borderBottomColor: "surface",
        borderBottomWidth: 1,
        backgroundColor: "background",
        color: "text",
        display: "flex",
        height: 1,
        p: theme => `${theme.space[2]}px ${theme.space[3]}px`,
        position: "fixed",
        width: 0,
        zIndex: 0,
      }}
    >
      {children}
    </header>
    <div sx={{ height: 1 }} />
  </ThemeWrapper>
)

Header.propTypes = {
  /** React children */
  children: PropTypes.any,
}
