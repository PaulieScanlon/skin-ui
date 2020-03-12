/** @jsx jsx */
import { memo, useContext } from "react"
import { jsx } from "theme-ui"
import { transparentize } from "@theme-ui/color"
import { Close } from "@theme-ui/components"

import { SkinContext } from "../../context"

import { ThemeWrapper } from "../ThemeWrapper"

import { SET_IS_NAV_OPEN } from "../../utils/const"

export const Lightbox = memo(() => {
  const { state, dispatch } = useContext(SkinContext)

  const handleClose = () => {
    dispatch({ type: SET_IS_NAV_OPEN, isNavOpen: false })
  }

  return (
    <ThemeWrapper>
      <div
        role="button"
        tabIndex="0"
        onClick={handleClose}
        onKeyDown={event => (event.key === "Enter" ? handleClose : {})}
        sx={{
          backgroundColor: transparentize("black", 0.2),
          display: [
            state.isNavOpen ? "flex" : "none",
            state.isNavOpen ? "flex" : "none",
            state.isNavOpen ? "flex" : "none",
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
          title="Close Lightbox"
          onClick={handleClose}
          sx={{ background: "black" }}
        />
      </div>
    </ThemeWrapper>
  )
})
