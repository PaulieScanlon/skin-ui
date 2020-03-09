/** @jsx jsx */
import { memo } from "react"
import PropTypes from "prop-types"
import { jsx } from "theme-ui"
import { MenuButton, IconButton, Link, Text } from "@theme-ui/components"

import { ThemeWrapper } from "../ThemeWrapper"
import { Logo } from "../Logo"
import { commonFocus } from "../../theme"
import { SvgIcon } from "../SvgIcon"

import * as packageJSON from "../../../package.json"

export const Header = memo(({ onClick, isNavOpen, sidebarWidth }) => (
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
        p: theme => `${theme.space[2]}px ${theme.space[3]}px`,
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
          <div
            sx={{
              alignItems: "center",
              display: "flex",
            }}
          >
            <Text
              sx={{
                display: ["none", "block", "block", "block"],
                color: "muted",
                fontSize: 0,
                mr: 3,
              }}
            >
              theme-iu: {packageJSON.dependencies["theme-ui"]}
            </Text>
            <Text
              sx={{
                display: ["none", "block", "block", "block"],
                color: "muted",
                fontSize: 0,
                mr: 3,
              }}
            >
              theme-iu/compoments:
              {packageJSON.dependencies["@theme-ui/components"]}
            </Text>
          </div>
        )}
        <div
          sx={{
            alignItems: "center",
            display: "flex",
          }}
        >
          <Link
            href="https://twitter.com/PaulieScanlon"
            target="_blank"
            title="@pauliescanlon"
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
              aria-label="Twitter"
            >
              <SvgIcon
                iconPath="M23.6,4.9c-0.9,0.4-1.8,0.6-2.7,0.7c1-0.6,1.7-1.5,2.1-2.6C22,3.6,21,4,19.9,4.2
	c-0.9-0.9-2.1-1.5-3.5-1.5c-2.6,0-4.7,2.1-4.7,4.7c0,0.4,0,0.7,0.1,1.1C7.9,8.3,4.4,6.4,2,3.6C1.6,4.3,1.4,5.1,1.4,5.9
	c0,1.6,0.8,3.1,2.1,3.9C2.7,9.8,2,9.6,1.4,9.3c0,0,0,0,0,0.1c0,0.6,0.1,1.2,0.3,1.7c0.6,1.5,1.9,2.6,3.5,2.9
	c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,1.9,2.4,3.2,4.4,3.2c-1.6,1.3-3.7,2-5.9,2c-0.4,0-0.8,0-1.1-0.1
	c2.1,1.3,4.6,2.1,7.3,2.1c7.4,0,12-5.1,13.2-10.5c0.2-0.9,0.3-1.9,0.3-2.8c0-0.2,0-0.4,0-0.6C22.1,6.7,22.9,5.9,23.6,4.9z"
              />
            </IconButton>
          </Link>
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
      </div>
    </header>
    <div sx={{ height: "header" }} />
  </ThemeWrapper>
))

Header.propTypes = {
  /** MenuButton onClick */
  onClick: PropTypes.func,
  /** parent state isNavOpen */
  isNavOpen: PropTypes.bool,
  /** Width of the Sidebar */
  sidebarWidth: PropTypes.number,
}
