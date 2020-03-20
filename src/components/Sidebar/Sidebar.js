/** @jsx jsx */
import { useContext, useState, memo, Fragment } from "react"
import PropTypes from "prop-types"
import { jsx } from "theme-ui"
import { Box, Text } from "@theme-ui/components"
import VisibilitySensor from "react-visibility-sensor"

import { SkinContext } from "../../context"

import { ThemeWrapper } from "../ThemeWrapper"
import { Logo } from "../Logo"

import { useSiteMetadata } from "../../data/useSiteMetadata"

import * as packageJSON from "../../../package.json"

export const Sidebar = memo(({ children }) => {
  const {
    site: {
      siteMetadata: {
        config: { sidebarWidth },
      },
    },
  } = useSiteMetadata()

  const { state } = useContext(SkinContext)

  const [isElementVisible, setIsElementVisible] = useState(true)

  const conditionalLeft = state.isNavOpen ? 0 : sidebarWidth

  const handleVisibilityChange = isVisible => {
    setIsElementVisible(isVisible)
  }

  return (
    <ThemeWrapper>
      <div
        sx={{
          backgroundColor: "background",
          borderRightStyle: 0,
          borderRightColor: "gray",
          borderRightWidth: 1,
          height: "max",
          left: [
            `-${conditionalLeft}px`,
            `-${conditionalLeft}px`,
            `-${conditionalLeft}px`,
            "0px",
          ],
          position: "fixed",
          transition: ".3s ease-in-out left",
          width: sidebarWidth,
          zIndex: theme => theme.zIndices.sidebar,
        }}
      >
        <VisibilitySensor onChange={handleVisibilityChange}>
          <Fragment>
            <div
              sx={{
                alignItems: "center",
                borderBottomStyle: 0,
                borderBottomColor: "black",
                borderBottomWidth: 1,
                backgroundColor: "black",
                boxSizing: "border-box",
                display: "flex",
                height: "header",
                justifyContent: "flex-start",
                p: theme => `0px ${theme.space[3]}px`,
              }}
            >
              <Logo isElementVisible={isElementVisible} />
            </div>
            <nav
              sx={{
                height: theme => `calc(100% - ${theme.sizes.doubleHeader}px)`,
                overflow: "auto",
                p: theme => `0px ${theme.space[4]}px`,
              }}
            >
              {children(isElementVisible)}
            </nav>
            <Box
              sx={{
                alignItems: "center",
                borderTopStyle: 0,
                borderTopColor: "gray",
                borderTopWidth: 1,
                display: "flex",
                height: "header",
                p: theme => `0px ${theme.space[4]}px`,
              }}
            >
              <Box>
                <Text
                  sx={{
                    color: "muted",
                    fontSize: 0,
                  }}
                >
                  theme-iu: {packageJSON.dependencies["theme-ui"]}
                </Text>
                <Text
                  sx={{
                    color: "muted",
                    fontSize: 0,
                  }}
                >
                  theme-iu/components:
                  {packageJSON.dependencies["@theme-ui/components"]}
                </Text>
              </Box>
            </Box>
          </Fragment>
        </VisibilitySensor>
      </div>
    </ThemeWrapper>
  )
})

Sidebar.propTypes = {
  /** children nav items from parent */
  children: PropTypes.any,
}
