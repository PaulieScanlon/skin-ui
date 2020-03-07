/** @jsx jsx */
import PropTypes from "prop-types"
import { jsx } from "theme-ui"
import { ThemeWrapper } from "../ThemeWrapper"
import { MenuButton } from "@theme-ui/components"

import { Logo } from "../Logo"
import { commonFocus } from "../../theme"

export const Header = ({ onClick, isNavOpen }) => (
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
        justifyContent: "space-between",
        height: 2,
        p: theme => `${theme.space[2]}px ${theme.space[3]}px`,
        position: "fixed",
        width: 0,
        zIndex: theme => theme.zIndices.header,
        a: {
          ":focus": {
            outline: "none",
          },
        },
      }}
    >
      <Logo />
      {!isNavOpen && (
        <MenuButton
          onClick={onClick}
          sx={{
            borderRadius: 0,
            color: "text",
            cursor: "pointer",
            display: ["block", "block", "none"],
            ":focus": {
              ...commonFocus,
            },
          }}
        />
      )}
    </header>
    <div sx={{ height: 2 }} />
  </ThemeWrapper>
)

Header.propTypes = {
  /** MenuButton onClick */
  onClick: PropTypes.func,
  /** parent state isNavOpen */
  isNavOpen: PropTypes.bool,
}
