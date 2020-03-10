/** @jsx jsx */
import PropTypes from "prop-types"
import { jsx } from "theme-ui"
import { Flex, Box, Label, Checkbox } from "@theme-ui/components"

import { Toolbar } from "../Toolbar"
import { IconButton } from "../IconButton"
import { ThemeWrapper } from "../ThemeWrapper"

import {
  ENTER_FULLSCREEN_ICON,
  EXIT_FULLSCREEN_ICON,
  PREVIEW_ICON,
  SOURCE_ICON,
} from "../../utils/iconPaths"

import { MARKDOWN, COMPONENTS } from "../../utils/const"

export const PreviewToolbar = ({
  handleCheckboxChange,
  isFullScreen,
  setIsFullScreen,
  isSourceVisible,
  setIsSourceVisible,
}) => (
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
        <Label title="Toggle Markdown visibility" mb={3} mr={2}>
          <div>
            <Checkbox
              name={MARKDOWN}
              defaultChecked
              onChange={event => handleCheckboxChange(event)}
            />
          </div>
          Markdown
        </Label>
        <Label title="Toggle Theme UI components visibility" mb={3}>
          <div>
            <Checkbox
              name={COMPONENTS}
              defaultChecked
              onChange={event => handleCheckboxChange(event)}
            />
          </div>
          Components
        </Label>
      </Box>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
        }}
      >
        <ThemeWrapper>
          <IconButton
            title={`${isFullScreen ? "Exit" : "Enter"} Fullscreen`}
            onClick={() => setIsFullScreen(!isFullScreen)}
            sx={{
              mr: 1,
            }}
            aria-label={`${isFullScreen ? "Exit" : "Enter"} Fullscreen`}
            iconPath={
              isFullScreen ? EXIT_FULLSCREEN_ICON : ENTER_FULLSCREEN_ICON
            }
          />

          <IconButton
            title={`View ${isSourceVisible ? "Preview" : "Source"}`}
            onClick={() => setIsSourceVisible(!isSourceVisible)}
            aria-label={`View ${isSourceVisible ? "Preview" : "Source"}`}
            iconPath={isSourceVisible ? SOURCE_ICON : PREVIEW_ICON}
          />
        </ThemeWrapper>
      </Box>
    </Flex>
  </Toolbar>
)

PreviewToolbar.prototypes = {
  /** parent handleCheckboxChange function */
  handleCheckboxChange: PropTypes.func,
  /** parent isFullScreen state value */
  isFullScreen: PropTypes.bool,
  /** parent setIsFullScreen function */
  setIsFullScreen: PropTypes.func,
  /** parent isSourceVisible state value */
  isSourceVisible: PropTypes.bool,
  /** parent setIsSourceVisible function */
  setIsSourceVisible: PropTypes.func,
}
