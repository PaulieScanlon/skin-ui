/** @jsx jsx */
import { memo } from "react"
import PropTypes from "prop-types"
import { jsx } from "theme-ui"

import { Flex, Box } from "@theme-ui/components"
import { ThemeWrapper } from "../ThemeWrapper"

export const ThemeThumbnail = memo(({ colors }) => {
  const {
    text,
    background,
    primary,
    secondary,
    muted,
    highlight,
    gray,
    accent,
    darken,
  } = colors

  return (
    <ThemeWrapper>
      <Flex sx={{ backgroundColor: background, p: 3, width: "100%" }}>
        <Box
          sx={{
            backgroundColor: text,
            display: "inline-flex",
            flex: "1 1 auto",
            p: 3,
          }}
        />
        <Box
          sx={{
            backgroundColor: primary,
            display: "inline-flex",
            flex: "1 1 auto",
            p: 3,
          }}
        />
        <Box
          sx={{
            backgroundColor: secondary,
            display: "inline-flex",
            flex: "1 1 auto",
            p: 3,
          }}
        />
        <Box
          sx={{
            backgroundColor: muted,
            display: "inline-flex",
            flex: "1 1 auto",
            p: 3,
          }}
        />
        <Box
          sx={{
            backgroundColor: highlight,
            display: "inline-flex",
            flex: "1 1 auto",
            p: 3,
          }}
        />
        <Box
          sx={{
            backgroundColor: gray,
            display: "inline-flex",
            flex: "1 1 auto",
            p: 3,
          }}
        />
        <Box
          sx={{
            backgroundColor: accent,
            display: "inline-flex",
            flex: "1 1 auto",
            p: 3,
          }}
        />
        <Box
          sx={{
            backgroundColor: darken,
            display: "inline-flex",
            flex: "1 1 auto",
            p: 3,
          }}
        />
      </Flex>
    </ThemeWrapper>
  )
})

ThemeThumbnail.propTypes = {
  /** colors Object from database theme_object */
  colors: PropTypes.shape({
    text: PropTypes.string,
    background: PropTypes.string,
    primary: PropTypes.string,
    secondary: PropTypes.string,
    muted: PropTypes.string,
    highlight: PropTypes.string,
    gray: PropTypes.string,
    accent: PropTypes.string,
    darken: PropTypes.string,
  }),
}
