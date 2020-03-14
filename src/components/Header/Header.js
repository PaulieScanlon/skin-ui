/** @jsx jsx */
import { useContext, memo /** Fragment **/ } from "react"
import PropTypes from "prop-types"
import { jsx } from "theme-ui"
// import netlifyIdentity from "netlify-identity-widget"
import { MenuButton, Link, Text /**Button **/ } from "@theme-ui/components"

import { SkinContext } from "../../context"

import { ThemeWrapper } from "../ThemeWrapper"
import { Logo } from "../Logo"
import { IconButton } from "../IconButton"
import { TWITTER_ICON, GITHUB_ICON } from "../../utils/iconPaths"

import { SET_IS_NAV_OPEN } from "../../utils/const"

import * as packageJSON from "../../../package.json"

import { useSiteMetadata } from "../../data/useSiteMetadata"

export const Header = memo(({ showMenu }) => {
  const {
    site: {
      siteMetadata: {
        config: { sidebarWidth },
      },
    },
  } = useSiteMetadata()

  const { state, dispatch } = useContext(SkinContext)

  return (
    <ThemeWrapper>
      <header
        sx={{
          alignItems: "center",
          borderBottomStyle: 0,
          borderBottomColor: "gray",
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
          {!state.isNavOpen && showMenu && (
            <MenuButton
              title="Open Navigation"
              onClick={() =>
                dispatch({ type: SET_IS_NAV_OPEN, isNavOpen: true })
              }
              sx={{
                display: ["block", "block", "block", "none"],
                mr: 3,
              }}
            />
          )}
          <Logo isElementVisible={true} />
        </div>
        <div
          sx={{
            alignItems: "center",
            display: "flex",
            flexBasis: `calc(100% - ${sidebarWidth}px)`,
            justifyContent: [
              "flex-end",
              "flex-end",
              "flex-end",
              "space-between",
            ],
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
              title="https://twitter.com/PaulieScanlon"
              aria-label="Twitter Username"
              sx={{
                mr: 1,
              }}
            >
              <IconButton tabIndex={-1} iconPath={TWITTER_ICON} />
            </Link>
            <Link
              href="https://github.com/PaulieScanlon/skin-ui"
              target="_blank"
              title="https://github.com/PaulieScanlon/skin-ui"
              aria-label="GitHub Repo"
              // sx={{
              //   mr: 1,
              // }}
            >
              <IconButton tabIndex={-1} iconPath={GITHUB_ICON} />
            </Link>
            {/* {state.user ? (
              <Fragment>
                <Button
                  variant="ghost"
                  sx={{
                    mr: 2,
                  }}
                  onClick={() => netlifyIdentity.logout()}
                >
                  Logout
                </Button>
                <Text>{state.user.full_name}</Text>
              </Fragment>
            ) : (
              <Button
                variant="secondary"
                onClick={() => netlifyIdentity.open()}
              >
                Login / Signup
              </Button>
            )} */}
          </div>
        </div>
      </header>
      <div sx={{ height: "header" }} />
    </ThemeWrapper>
  )
})

Header.defaultProps = {
  showMenu: false,
}
Header.propTypes = {
  /** Boolean to control Menu Button visibility */
  showMenu: PropTypes.bool,
}
