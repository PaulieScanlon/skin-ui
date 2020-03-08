/** @jsx jsx */
import PropTypes from "prop-types"
import { jsx } from "theme-ui"
import { MenuButton, IconButton, Link, Text } from "@theme-ui/components"

import { ThemeWrapper } from "../ThemeWrapper"
import { Logo } from "../Logo"
import { commonFocus } from "../../theme"
import { SvgIcon } from "../SvgIcon"

import * as packageJSON from "../../../package.json"

export const Header = ({ onClick, isNavOpen, sidebarWidth }) => (
  <ThemeWrapper>
    <header
      sx={{
        alignItems: "center",
        borderBottomStyle: 0,
        borderBottomColor: "darken",
        borderBottomWidth: 1,
        backgroundColor: "background",
        boxSizing: "border-box",
        color: "text",
        display: "flex",
        justifyContent: "space-between",
        height: "header",
        p: theme => `${theme.space[2]}px ${theme.space[4]}px`,
        position: "fixed",
        width: "max",
        zIndex: theme => theme.zIndices.header,
        a: {
          ":focus": {
            outline: "none",
          },
        },
      }}
    >
      <div
        sx={{
          alignItems: "center",
          display: "flex",
          height: "header",
        }}
      >
        {!isNavOpen && (
          <MenuButton
            onClick={onClick}
            sx={{
              borderRadius: 0,
              color: "text",
              cursor: "pointer",
              display: ["block", "block", "block", "none"],
              mr: 3,
              ":focus": {
                ...commonFocus,
              },
            }}
          />
        )}
        <Logo />
      </div>
      <div
        sx={{
          alignItems: "center",
          display: "flex",
          flexBasis: `calc(100% - ${sidebarWidth}px)`,
          justifyContent: ["flex-end", "flex-end", "flex-end", "space-between"],
        }}
      >
        {sidebarWidth && (
          <Text
            sx={{
              display: ["none", "none", "none", "block"],
            }}
          >
            theme-iu: {packageJSON.dependencies["theme-ui"]}
          </Text>
        )}
        <Link
          href="https://github.com/PaulieScanlon/nude-ui"
          target="_blank"
          title="GitHub Repo"
        >
          <IconButton
            sx={{
              borderRadius: 0,
              color: "text",
              cursor: "pointer",
              ":focus": {
                ...commonFocus,
              },
            }}
            aria-label="GitHub Repo"
          >
            <SvgIcon iconPath="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
          </IconButton>
        </Link>
      </div>
    </header>
    <div sx={{ height: "header" }} />
  </ThemeWrapper>
)

Header.propTypes = {
  /** MenuButton onClick */
  onClick: PropTypes.func,
  /** parent state isNavOpen */
  isNavOpen: PropTypes.bool,
  /** Width of the Sidebar */
  sidebarWidth: PropTypes.number,
}
