/** @jsx jsx */
import { useContext, Fragment } from "react"
import { jsx } from "theme-ui"
import { Flex, NavLink } from "@theme-ui/components"

import { SkinContext } from "../../context"

import { ThemeWrapper } from "../ThemeWrapper"

export const TopNav = () => {
  const { state } = useContext(SkinContext)
  return (
    <ThemeWrapper>
      <Flex
        as="nav"
        sx={{
          ml: 2,
          display: ["none", "none", "none", "flex"],
        }}
      >
        <Fragment>
          <NavLink href="/editor" sx={{ px: 3, py: 2 }}>
            Code Editor
          </NavLink>
          <NavLink href="/showcase" sx={{ px: 3, py: 2 }}>
            Showcase
          </NavLink>
        </Fragment>
      </Flex>
    </ThemeWrapper>
  )
}
