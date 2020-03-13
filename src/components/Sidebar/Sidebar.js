/** @jsx jsx */
import { useContext, useState, memo, Fragment } from "react"
import PropTypes from "prop-types"
import { jsx } from "theme-ui"
import VisibilitySensor from "react-visibility-sensor"

import { SkinContext } from "../../context"

import { ThemeWrapper } from "../ThemeWrapper"
import { Logo } from "../Logo"
import { Sidenav } from "../Sidenav"

import { useSiteMetadata } from "../../data/useSiteMetadata"

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
          borderRightColor: "darken",
          borderRightWidth: 1,
          height: "max",
          left: [
            `-${conditionalLeft}px`,
            `-${conditionalLeft}px`,
            `-${conditionalLeft}px`,
            "0px",
          ],
          position: "fixed",
          transition: ".5s ease-in-out left",
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
                height: theme => `calc(100% - ${theme.sizes.header}px)`,
                overflow: "auto",
                p: theme => `0px ${theme.space[4]}px`,
              }}
            >
              {children(isElementVisible)}
            </nav>
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
