/** @jsx jsx */
import { useContext } from "react"
import { jsx } from "theme-ui"
import { Flex, Box, Button } from "@theme-ui/components"
// import copy from "clipboard-copy"

import { SkinContext } from "../../context"

import { Toolbar } from "../Toolbar"
import { IconButton } from "../IconButton"

import { stringifyReplaceQuotes } from "../../utils/stringifyReplaceQuotes"

import {
  EXPAND_ICON,
  COLLAPSE_ICON,
  SETTINGS_ICON,
} from "../../utils/iconPaths"
import {
  SET_IS_EDITOR_WIDTH_COLLAPSED,
  SET_IS_EDITOR_HEIGHT_COLLAPSED,
  SET_IS_SETTINGS_OPEN,
} from "../../utils/const"

export const EditorToolbar = () => {
  const { state, dispatch } = useContext(SkinContext)

  return (
    <Toolbar>
      <Flex
        sx={{
          alignItems: "center",
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
          <IconButton
            title={`${
              state.isEditorHeightCollapsed ? "Expand" : "Collapse"
            } Editor`}
            onClick={() =>
              dispatch({
                type: SET_IS_EDITOR_HEIGHT_COLLAPSED,
                isEditorHeightCollapsed: state.isEditorHeightCollapsed,
              })
            }
            sx={{
              display: ["block", "block", "block", "none"],
              transform: "rotate(-90deg)",
            }}
            aria-label={`${
              state.isEditorHeightCollapsed ? "Expand" : "Collapse"
            } Editor`}
            iconPath={
              state.isEditorHeightCollapsed ? COLLAPSE_ICON : EXPAND_ICON
            }
          />

          <IconButton
            title={`${
              state.isEditorWidthCollapsed ? "Expand" : "Collapse"
            } Editor`}
            onClick={() =>
              dispatch({
                type: SET_IS_EDITOR_WIDTH_COLLAPSED,
                isEditorWidthCollapsed: state.isEditorWidthCollapsed,
              })
            }
            sx={{
              display: ["none", "none", "none", "block"],
            }}
            aria-label={`${
              state.isEditorWidthCollapsed ? "Expand" : "Collapse"
            } Editor`}
            iconPath={
              state.isEditorWidthCollapsed ? COLLAPSE_ICON : EXPAND_ICON
            }
          />
        </Box>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
          }}
        >
          {/* <Button
            title="Copy Theme UI object"
            onClick={() =>
              copy(
                `export default \n${stringifyReplaceQuotes(
                  state.defaultThemeObject
                )}`
              )
            }
            sx={{
              mr: 2,
            }}
          >
            Copy
          </Button> */}
          {state.user && (
            <IconButton
              title="Settings"
              onClick={() => {
                dispatch({
                  type: SET_IS_SETTINGS_OPEN,
                  isSettingsOpen: state.isSettingsOpen,
                })
              }}
              aria-label="Settings"
              iconPath={SETTINGS_ICON}
            />
          )}
        </Box>
      </Flex>
    </Toolbar>
  )
}
