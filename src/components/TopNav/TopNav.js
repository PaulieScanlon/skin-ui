/** @jsx jsx */
import { jsx } from "theme-ui"
import { Flex, NavLink } from "@theme-ui/components"

import { ThemeWrapper } from "../ThemeWrapper"

export const TopNav = () => {
  return (
    <ThemeWrapper>
      <Flex
        as="nav"
        sx={{
          ml: 2,
          display: ["none", "flex", "flex", "flex"],
        }}
      >
        <NavLink href="/editor">Code Editor</NavLink>
        <NavLink href="/showcase">Showcase</NavLink>
      </Flex>
    </ThemeWrapper>
  )
}
