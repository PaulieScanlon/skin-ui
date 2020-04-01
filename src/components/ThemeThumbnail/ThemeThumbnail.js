/** @jsx jsx */
import { memo, useEffect, useState } from "react"
import PropTypes from "prop-types"
import { jsx } from "theme-ui"
import validateKeys from "object-key-validator"
import { Flex, Box, Text } from "@theme-ui/components"

import { ThemeWrapper } from "../ThemeWrapper"
import { SvgIcon } from "../SvgIcon"
import { WARNING_ICON, ERROR_ICON } from "../../utils/iconPaths"

export const ThemeThumbnail = memo(({ themeObject, themeRef }) => {
  const [colors, setColors] = useState({})
  const [syntaxError, setSyntaxError] = useState("")
  const colorError = "Incomplete colors object"

  useEffect(() => {
    try {
      JSON.parse(themeObject)
      setColors(JSON.parse(themeObject).colors)
      return
    } catch (e) {
      if (e instanceof SyntaxError) {
        // console.error(`Skin UI syntax error with ref: ${themeRef}`)
        setSyntaxError("This theme has syntax errors!")
      }
    }
  }, [themeObject])

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
        <Flex
          sx={{
            alignItems: "center",
            backgroundColor: "highlight",
            p: 5,
            width: "100%",
          }}
        >
          <SvgIcon
            iconPath={syntaxError ? ERROR_ICON : WARNING_ICON}
            sx={{ color: "primary", mr: 2 }}
          />
          <Text
            sx={{
              color: "darken",
            }}
          >
            {syntaxError ? syntaxError : colorError}
          </Text>
        </Flex>
      )}
    </ThemeWrapper>
  )
})

ThemeThumbnail.propTypes = {
  /** theme_object */
  themeObject: PropTypes.any,
  /** ref */
  themeRef: PropTypes.string,
}
