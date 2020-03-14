/** @jsx jsx */
import { useContext } from "react"

import { jsx } from "theme-ui"
import { Flex, Box, Label, Checkbox } from "@theme-ui/components"

import { SkinContext } from "../../context"

import { Toolbar } from "../Toolbar"
import { IconButton } from "../IconButton"
import { ThemeWrapper } from "../ThemeWrapper"

import {
  ENTER_FULLSCREEN_ICON,
  EXIT_FULLSCREEN_ICON,
  PREVIEW_ICON,
  SOURCE_ICON,
} from "../../utils/iconPaths"

import {
  MARKDOWN,
  COMPONENTS,
  SET_FULL_SCREEN,
  SET_IS_SOURCE_VISIBLE,
  SET_FILTER_CHILDREN,
} from "../../utils/const"

export const PreviewToolbar = () => {
  const { state, dispatch } = useContext(SkinContext)

  const handleChange = event => {
    dispatch({
      type: SET_FILTER_CHILDREN,
      filterChildren: event.target.name,
    })
  }

  return (
    <Toolbar>
      <Flex
        sx={{
          flex: "1 1 auto",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
          }}
        >
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
            }}
          >
            <Label
              title="Toggle Markdown visibility"
              htmlFor={MARKDOWN}
              sx={{
                fontWeight: "body",
                mb: 0,
                mr: 3,
              }}
            >
              <Checkbox
                id={MARKDOWN}
                name={MARKDOWN}
                defaultChecked
                onChange={event => handleChange(event)}
              />
              Markdown
            </Label>
          </Box>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Label
              title="Toggle Theme UI components visibility"
              htmlFor={COMPONENTS}
              sx={{
                fontWeight: "body",
                mb: 0,
              }}
            >
              <Checkbox
                id={COMPONENTS}
                name={COMPONENTS}
                defaultChecked
                onChange={event => handleChange(event)}
              />
              Components
            </Label>
          </Box>
        </Box>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
          }}
        >
          <ThemeWrapper>
            <IconButton
              title={`View ${state.isSourceVisible ? "Preview" : "Source"}`}
              onClick={() =>
                dispatch({
                  type: SET_IS_SOURCE_VISIBLE,
                  isSourceVisible: state.isSourceVisible,
                })
              }
              sx={{
                mr: 1,
              }}
              aria-label={`View ${
                state.isSourceVisible ? "Preview" : "Source"
              }`}
              iconPath={state.isSourceVisible ? SOURCE_ICON : PREVIEW_ICON}
            />

            <IconButton
              title={`${state.isFullScreen ? "Exit" : "Enter"} Fullscreen`}
              onClick={() =>
                dispatch({
                  type: SET_FULL_SCREEN,
                  isFullScreen: state.isFullScreen,
                })
              }
              aria-label={`${state.isFullScreen ? "Exit" : "Enter"} Fullscreen`}
              iconPath={
                state.isFullScreen
                  ? EXIT_FULLSCREEN_ICON
                  : ENTER_FULLSCREEN_ICON
              }
            />
          </ThemeWrapper>
        </Box>
      </Flex>
    </Toolbar>
  )
}
