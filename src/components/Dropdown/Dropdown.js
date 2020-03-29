/** @jsx jsx */
import { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { jsx } from "theme-ui"
import { Box } from "@theme-ui/components"

export const Dropdown = ({ trigger, children, ...sx }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleClickedOutside = () => {
    setIsMenuOpen(false)
  }

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("click", handleClickedOutside)
    } else {
      document.removeEventListener("click", handleClickedOutside)
    }

    return () => document.removeEventListener("click", handleClickedOutside)
  }, [isMenuOpen])

  return (
    <Box
      {...sx}
      sx={{
        position: "relative",
        minWidth: "dropdown",
      }}
    >
      <Box>{trigger(isMenuOpen, setIsMenuOpen)}</Box>
      {isMenuOpen && (
        <Box
          sx={{
            position: "absolute",
            mt: 2,
            right: 0,
          }}
        >
          {children}
        </Box>
      )}
    </Box>
  )
}

Dropdown.prototypes = {
  /** trigger */
  trigger: PropTypes.func.isRequired,
  /** jsx sx spread */
  sx: PropTypes.any,
  /** children */
  children: PropTypes.node,
}
