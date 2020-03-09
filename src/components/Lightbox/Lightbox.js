/** @jsx jsx */
import { memo } from "react"
import PropTypes from "prop-types"
import { jsx } from "theme-ui"
import { transparentize } from "@theme-ui/color"
import { Close } from "@theme-ui/components"

import { ThemeWrapper } from "../ThemeWrapper"
import { commonFocus } from "../../theme"

export const Lightbox = memo(({ onClick, isNavOpen }) => {
  return (
    <ThemeWrapper>
      <div
        role="button"
        tabIndex="0"
        onClick={onClick}
        onKeyDown={event => (event.key === "Enter" ? onClick : {})}
        sx={{
          backgroundColor: transparentize("black", 0.2),
          display: [
            isNavOpen ? "flex" : "none",
            isNavOpen ? "flex" : "none",
            isNavOpen ? "flex" : "none",
            "none",
          ],
          height: "100%",
          justifyContent: "flex-end",
          p: 3,
          position: "fixed",
          transition: ".2s linear background-color",
          width: "100%",
          zIndex: theme => theme.zIndices.lightbox,
          ":focus": {
            backgroundColor: transparentize("black", 0.4),
          },
        }}
      >
        <Close
          onClick={onClick}
          sx={{
            borderRadius: 0,
            backgroundColor: "black",
            color: "text",
            cursor: "pointer",
            ":focus": {
              ...commonFocus,
            },
          }}
        />
      </div>
    </ThemeWrapper>
  )
})

Lightbox.propTypes = {
  /** CloseButton onClick */
  onClick: PropTypes.func,
  /** parent state isNavOpen */
  isNavOpen: PropTypes.bool,
}
