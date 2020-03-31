/** @jsx jsx */
import { memo } from "react"
import PropTypes from "prop-types"
import { jsx } from "theme-ui"

import validateKeys from "object-key-validator"

import { Flex, Box, Text } from "@theme-ui/components"
import { ThemeWrapper } from "../ThemeWrapper"

export const ThemeThumbnail = memo(({ colors }) => {
  const rule = {
    $and: [
      "text",
      "background",
      "primary",
      "secondary",
      "muted",
      "highlight",
      "gray",
      "accent",
      "darken",
    ],
  }

  return (
    <ThemeWrapper>
      {colors && validateKeys(rule, colors) ? (
        <Box
          sx={{
            backgroundColor: colors.background,
            p: 3,
            width: "100%",
          }}
        >
          <Box
            sx={{
              backgroundColor: colors.highlight,
              p: 1,
              mb: 2,
              width: "25%",
            }}
          />
          <Box
            sx={{
              backgroundColor: colors.text,
              p: 2,
              mb: 3,
            }}
          />
          <Box
            sx={{
              backgroundColor: colors.text,
              p: 1,
              mb: 1,
              width: "75%",
            }}
          />
          <Box
            sx={{
              backgroundColor: colors.text,
              p: 1,
              mb: 1,
              width: "50%",
            }}
          />
          <Box
            sx={{
              backgroundColor: colors.text,
              p: 1,
              mb: 3,
              width: "33%",
            }}
          />

          <Box
            sx={{
              backgroundColor: colors.muted,
              p: 4,
              mb: 6,
              width: "100%",
            }}
          />
          <Flex
            sx={{
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <Box
              sx={{
                backgroundColor: colors.primary,
                color: colors.primary,
                flex: "1 1 auto",
                maxWidth: 120,
                p: 3,
                mr: 2,
              }}
            />
            <Box
              sx={{
                backgroundColor: colors.secondary,
                color: colors.secondary,
                flex: "1 1 auto",
                maxWidth: 120,
                p: 3,
                mr: 2,
              }}
            />

            <Box
              sx={{
                backgroundColor: colors.accent,
                borderRadius: "100%",
                ml: "auto",
                width: 24,
                height: 24,
              }}
            />
            <Box
              sx={{
                backgroundColor: colors.gray,
                borderRadius: "100%",
                ml: 2,
                width: 24,
                height: 24,
              }}
            />
          </Flex>
        </Box>
      ) : (
        <Flex sx={{ backgroundColor: "gray", p: 3, width: "100%" }}>
          <Box
            sx={{
              p: 3,
              width: "100%",
            }}
          >
            <Text
              sx={{
                color: "muted",
                textAlign: "center",
                m: "0 auto",
              }}
            >
              No colors not found
            </Text>
          </Box>
        </Flex>
      )}
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
