/** @jsx jsx */
import { useContext, memo, Fragment } from "react"
import PropTypes from "prop-types"
import { jsx } from "theme-ui"
import netlifyIdentity from "netlify-identity-widget"
import {
  MenuButton as BurgerMenu,
  NavLink,
  Text,
  Button,
  Flex,
  Box,
  Divider,
} from "@theme-ui/components"

import { SkinContext } from "../../context"

import { ThemeWrapper } from "../ThemeWrapper"
import { Logo } from "../Logo"
import { Dropdown } from "../Dropdown"
import { SvgIcon } from "../SvgIcon"

import { ARROW_DOWN_ICON, ARROW_UP_ICON } from "../../utils/iconPaths"
import { SET_IS_NAV_OPEN } from "../../utils/const"

import { useSiteMetadata } from "../../data/useSiteMetadata"

export const Header = memo(({ isEditorRoute, isLoading }) => {
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
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            height: "header",
          }}
        >
          {isEditorRoute && (
            <BurgerMenu
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
        </Box>

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
                display: ["none", "none", "none", "flex"],
                flexDirection: "column",
              }}
            >
              {isEditorRoute && !isLoading && (
                <Fragment>
                  <Text
                    sx={{
                      color: "muted",
                    }}
                  >
                    {state.databaseThemeById.theme_name}
                  </Text>
                  <Text
                    sx={{
                      color: "muted",
                      fontSize: 0,
                    }}
                  >
                    {state.databaseThemeById.theme_description}
                  </Text>
                </Fragment>
              )}
            </div>
          )}
          <Flex>
            {state.user ? (
              <Fragment>
                <Dropdown
                  sx={{
                    textAlign: "right",
                  }}
                  trigger={(isMenuOpen, setIsMenuOpen) => (
                    <Button
                      variant="ghost"
                      onClick={() => setIsMenuOpen(true)}
                      sx={{
                        display: "inline-flex",
                        pr: 1,
                        textTransform: "none",
                      }}
                    >
                      {state.user.user_metadata.full_name}
                      <SvgIcon
                        iconPath={isMenuOpen ? ARROW_UP_ICON : ARROW_DOWN_ICON}
                        sx={{ ml: 2 }}
                      />
                    </Button>
                  )}
                >
                  <Box
                    sx={{
                      backgroundColor: "background",
                      borderStyle: 0,
                      borderColor: "gray",
                      borderWidth: 1,
                      display: "flex",
                      flexDirection: "column",
                      minWidth: "dropdown",
                      width: 140,
                    }}
                  >
                    <NavLink href="/your-themes" sx={{ px: 3, py: 2 }}>
                      Your Themes
                    </NavLink>
                    <NavLink href="/your-themes" sx={{ px: 3, py: 2 }}>
                      All Themes
                    </NavLink>
                    <Divider sx={{ m: 0, color: "gray" }} />
                    <Button
                      sx={{
                        textTransform: "none",
                      }}
                      variant="ghost"
                      onClick={() => netlifyIdentity.logout()}
                    >
                      Log out
                    </Button>
                  </Box>
                </Dropdown>
              </Fragment>
            ) : (
              <Button
                variant="secondary"
                onClick={() => netlifyIdentity.open()}
                sx={{
                  ml: 3,
                }}
              >
                Login / Sign up
              </Button>
            )}
          </Flex>
        </div>
      </header>

      <div sx={{ height: "header" }} />
    </ThemeWrapper>
  )
})

Header.defaultProps = {
  isEditorRoute: false,
  data: null,
}

Header.propTypes = {
  /** Boolean to control Menu Button and package text visibility */
  isEditorRoute: PropTypes.bool,
  /** Parent state, status of database collection */
  isLoading: PropTypes.bool,
}
