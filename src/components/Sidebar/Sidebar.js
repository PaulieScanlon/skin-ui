/** @jsx jsx */
import { useState, memo, Fragment } from "react"
import PropTypes from "prop-types"
import { jsx } from "theme-ui"
import VisibilitySensor from "react-visibility-sensor"

import { ThemeWrapper } from "../ThemeWrapper"
import { Logo } from "../Logo"
import { Sidenav } from "../Sidenav"

export const Sidebar = memo(({ sidebarWidth, mdx, isNavOpen }) => {
  const [isElementVisible, setIsElementVisible] = useState(true)

  const navItems = mdx.reduce((items, item) => {
    const { className } = item.props
    items[className] = items[className] = []
    items[className].push(
      item.props.children.filter(child =>
        child.props.children &&
        child.props.children.props &&
        child.props.children.props.href
          ? child
          : null
      )
    )

    return items
  }, [])

  const conditionalLeft = isNavOpen ? 0 : sidebarWidth

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
                height: theme => `calc(100% - ${theme.sizes.header}px)`,
                overflow: "auto",
                p: theme => `0px ${theme.space[4]}px`,
              }}
            >
              <Sidenav
                navItems={navItems}
                isElementVisible={isElementVisible}
              />
            </nav>
          </Fragment>
        </VisibilitySensor>
      </div>
    </ThemeWrapper>
  )
})

Sidebar.propTypes = {
  /** Width of the Sidebar */
  sidebarWidth: PropTypes.number,
  /** mdx children from layout */
  mdx: PropTypes.any,
  /** parent state isNavOpen */
  isNavOpen: PropTypes.bool,
}
