/** @jsx jsx */
import { useContext, useState, useEffect, Fragment } from "react"
import PropTypes from "prop-types"
import { jsx } from "theme-ui"
import netlifyIdentity from "netlify-identity-widget"
import { NavLink, Button, Flex, Box, Divider } from "@theme-ui/components"

import { SkinContext } from "../../context"

import { ThemeWrapper } from "../ThemeWrapper"
import { Dropdown } from "../Dropdown"
import { SvgIcon } from "../SvgIcon"

import { ARROW_DOWN_ICON, ARROW_UP_ICON } from "../../utils/iconPaths"

import { useSiteMetadata } from "../../data/useSiteMetadata"

export const Header = ({ isEditorRoute, left }) => {
  const {
    site: {
      siteMetadata: {
        config: { sidebarWidth },
      },
    },
  } = useSiteMetadata()

  const { state } = useContext(SkinContext)

  const [hasHeaderLoaded, setHasHeaderLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setHasHeaderLoaded(true)
    }, 100)
  }, [])

  return (
    <ThemeWrapper>
      <Box
        as="header"
        sx={{
          borderBottomStyle: 0,
          borderBottomColor: "gray",
          borderBottomWidth: 1,
          backgroundColor: "background",
          height: "header",
          px: 3,
          py: 2,
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
        <Flex
          sx={{
            alignItems: "center",
            flexWrap: "wrap",
            height: "100%",
            justifyContent: "space-between",
            ml: "auto",
            width: [
              "auto",
              "auto",
              "auto",
              `${isEditorRoute ? `calc(100% - ${sidebarWidth}px)` : "auto"}`,
            ],
          }}
        >
          <Box>{left}</Box>

          <Box>
            {state.user ? (
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
                <Flex
                  sx={{
                    backgroundColor: "background",
                    borderStyle: 0,
                    borderColor: "gray",
                    borderWidth: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    minWidth: "dropdown",
                    width: 180,
                    a: {
                      display: "flex",
                      flex: "1 1 auto",
                      justifyContent: "flex-end",
                    },
                  }}
                >
                  <Box>
                    <NavLink href="/your-themes">Your Themes</NavLink>
                    <Divider sx={{ color: "darken", m: 0 }} />
                    <NavLink href="/editor">Code Editor</NavLink>
                    <Divider sx={{ color: "darken", m: 0 }} />
                    <NavLink href="/showcase">Showcase</NavLink>
                    <Divider sx={{ color: "darken", m: 0 }} />
                  </Box>
                  <Box>
                    <Divider sx={{ color: "gray", m: 0 }} />
                    <Button
                      variant="ghost"
                      onClick={() => netlifyIdentity.logout()}
                      sx={{
                        width: "100%",
                      }}
                    >
                      Log out
                    </Button>
                  </Box>
                </Flex>
              </Dropdown>
            ) : (
              <Flex>
                {hasHeaderLoaded && (
                  <Fragment>
                    <Button
                      variant="accent"
                      onClick={() => netlifyIdentity.open("signup")}
                    >
                      Sign up
                    </Button>
                    <Button
                      variant="ghost"
                      onClick={() => netlifyIdentity.open("login")}
                      sx={{
                        ml: 2,
                      }}
                    >
                      Login
                    </Button>
                  </Fragment>
                )}
              </Flex>
            )}
          </Box>
        </Flex>
      </Box>
      <Box sx={{ height: "header" }} />
    </ThemeWrapper>
  )
}

Header.defaultProps = {
  isEditorRoute: false,
}

Header.propTypes = {
  /** Boolean to control Menu Button and package text visibility */
  isEditorRoute: PropTypes.bool,
  /** Render content on the left */
  left: PropTypes.node,
}
