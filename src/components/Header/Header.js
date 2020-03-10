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
        fontFamily: "body",
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
                iconPath="M21,7c-0.7,0.3-1.4,0.5-2.1,0.5c0.8-0.5,1.4-1.2,1.6-2C19.7,6,19,6.4,18.1,6.5
                c-0.7-0.7-1.6-1.2-2.7-1.2c-2,0-3.7,1.6-3.7,3.6c0,0.3,0,0.5,0.1,0.8C8.8,9.6,6,8.2,4.2,6C3.8,6.5,3.7,7.2,3.7,7.8
                c0,1.3,0.6,2.4,1.6,3.1c-0.6,0-1.2-0.2-1.6-0.4c0,0,0,0,0,0.1c0,0.5,0.1,0.9,0.3,1.4c0.5,1.2,1.4,2,2.7,2.3c-0.3,0.1-0.6,0.2-1,0.2
                c-0.3,0-0.5,0-0.7-0.1c0.5,1.4,1.9,2.5,3.4,2.5c-1.3,1-2.9,1.5-4.6,1.5c-0.3,0-0.6,0-0.8-0.1c1.5,0.8,3.5,1.4,5.6,1.4
                c5.8,0,9.3-4,10.3-8.1c0.2-0.7,0.3-1.4,0.3-2.2c0-0.2,0-0.3,0-0.5C19.8,8.4,20.5,7.8,21,7z"
              />
            </IconButton>
          </Link>
          <Link
            href="https://github.com/PaulieScanlon/skin-ui"
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
              <SvgIcon
                iconPath="M12,2.2c-5.5,0-10,4.5-10,10c0,4.4,2.9,8.2,6.8,9.5c0.5,0.1,0.7-0.2,0.7-0.5c0-0.2,0-0.9,0-1.7
	c-2.8,0.6-3.4-1.3-3.4-1.3C5.7,17.1,5,16.7,5,16.7c-0.9-0.6,0.1-0.6,0.1-0.6c1,0.1,1.5,1,1.5,1C7.5,18.7,9,18.3,9.5,18
	c0.1-0.6,0.3-1.1,0.6-1.3c-2.2-0.3-4.6-1.1-4.6-4.9c0-1.1,0.4-2,1-2.7C6.5,8.8,6.2,7.8,6.7,6.4c0,0,0.8-0.3,2.7,1
	c0.8-0.2,1.7-0.3,2.5-0.3c0.8,0,1.7,0.1,2.5,0.3c1.9-1.3,2.7-1,2.7-1c0.5,1.4,0.2,2.4,0.1,2.6c0.6,0.7,1,1.6,1,2.7
	c0,3.8-2.3,4.7-4.6,4.9c0.4,0.3,0.7,0.9,0.7,1.9c0,1.3,0,2.4,0,2.7c0,0.3,0.2,0.6,0.7,0.5c4-1.3,6.8-5.1,6.8-9.5
	C22,6.7,17.5,2.2,12,2.2z"
              />
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
