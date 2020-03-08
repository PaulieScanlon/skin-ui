/** @jsx jsx */
import PropTypes from "prop-types"
import { jsx } from "theme-ui"

import { ThemeWrapper } from "../ThemeWrapper"
import { Logo } from "../Logo"
import { Sidenav } from "../Sidenav"

export const Sidebar = ({ sidebarWidth, mdx, isNavOpen }) => {
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

  return (
    <ThemeWrapper>
      <div
        sx={{
          backgroundColor: "background",
          borderRightStyle: 0,
          borderRightColor: "darken",
          borderRightWidth: 1,
          height: "100%",
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
        <div
          sx={{
            alignItems: "center",
            backgroundColor: "black",
            display: "flex",
            height: 2,
            justifyContent: "flex-start",
            p: theme => `0px ${theme.space[5]}px`,
          }}
        >
          <Logo />
        </div>
        <nav
          sx={{
            height: theme => `calc(100% - ${theme.sizes[2]})`,
            overflow: "auto",
            p: theme => `0px ${theme.space[5]}px`,
          }}
        >
          <Sidenav navItems={navItems} />
        </nav>
      </div>
    </ThemeWrapper>
  )
}

Sidebar.propTypes = {
  /** Width of the Sidebar */
  sidebarWidth: PropTypes.number,
  /** mdx children from layout */
  mdx: PropTypes.any,
  /** parent state isNavOpen */
  isNavOpen: PropTypes.bool,
}
