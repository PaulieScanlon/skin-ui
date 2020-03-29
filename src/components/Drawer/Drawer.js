/** @jsx jsx */
import { useContext, useState, memo, Fragment } from "react"
import PropTypes from "prop-types"
import { jsx } from "theme-ui"
import { darken } from "@theme-ui/color"
import VisibilitySensor from "react-visibility-sensor"

import { Close } from "@theme-ui/components"

import { SkinContext } from "../../context"

import { ThemeWrapper } from "../ThemeWrapper"

import { SET_IS_SETTINGS_OPEN } from "../../utils/const"

import { useSiteMetadata } from "../../data/useSiteMetadata"

export const Drawer = memo(({ children }) => {
  const {
    site: {
      siteMetadata: {
        config: { drawerWidth },
      },
    },
  } = useSiteMetadata()

  const { state, dispatch } = useContext(SkinContext)

  const [isElementVisible, setIsElementVisible] = useState(true)

  const handleVisibilityChange = isVisible => {
    setIsElementVisible(isVisible)
  }

  return (
    <ThemeWrapper>
      <div
        sx={{
          backgroundColor: "white",
          boxShadow: isElementVisible ? 2 : 0,
          height: "max",
          right: `${state.isSettingsOpen ? 0 : `-${drawerWidth}px`}`,
          position: "fixed",
          transition: ".3s ease-in-out right",
          width: drawerWidth,
          zIndex: theme => theme.zIndices.drawer,
        }}
      >
        <VisibilitySensor onChange={handleVisibilityChange}>
          <Fragment>
            <div
              sx={{
                alignItems: "center",
                boxSizing: "border-box",
                display: "flex",
                height: "header",
                justifyContent: "flex-end",
                p: theme => `0px ${theme.space[3]}px`,
              }}
            >
              <Close
                variant="ghostIcon"
                tabIndex={isElementVisible ? 0 : -1}
                onClick={() =>
                  dispatch({
                    type: SET_IS_SETTINGS_OPEN,
                    isSettingsOpen: state.isSettingsOpen,
                  })
                }
              />
            </div>
            <div
              sx={{
                height: theme => `calc(100% - ${theme.sizes.header}px)`,
                color: "gray",
                px: 3,
                overflow: "auto",
              }}
            >
              {children(isElementVisible)}
            </div>
          </Fragment>
        </VisibilitySensor>
      </div>
    </ThemeWrapper>
  )
})

Drawer.propTypes = {
  /** children nav items from parent */
  children: PropTypes.any,
}
