/** @jsx jsx */
import { jsx } from "theme-ui"
import { Flex, NavLink } from "@theme-ui/components"
import { Link } from "gatsby"

import { ThemeWrapper } from "../ThemeWrapper"

export const TopNav = () => {
  return (
    <ThemeWrapper>
      <Flex
        as="nav"
        sx={{
          ml: 2,
          display: ["none", "flex", "flex", "flex"],

          ["& .nav-active-class"]: {
            span: {
              color: "primary",
            },
          },
        }}
      >
        <Link
          activeClassName="nav-active-class"
          partiallyActive={true}
          to="/editor/"
        >
          <NavLink as="span">Code Editor</NavLink>
        </Link>
        <Link
          activeClassName="nav-active-class"
          partiallyActive={true}
          to="/showcase/"
        >
          <NavLink as="span">Showcase</NavLink>
        </Link>
      </Flex>
    </ThemeWrapper>
  )
}
