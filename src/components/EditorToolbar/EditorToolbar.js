/** @jsx jsx */
import { useContext } from "react"
import PropTypes from "prop-types"
import { jsx } from "theme-ui"
import { Flex, Button } from "@theme-ui/components"
import copy from "clipboard-copy"

import { SkinContext } from "../../context"

import { Toolbar } from "../Toolbar"
import { IconButton } from "../IconButton"

import { stringifyReplaceQuotes } from "../../utils/stringifyReplaceQuotes"

import { EXPAND_ICON, COLLAPSE_ICON } from "../../utils/iconPaths"

export const EditorToolbar = ({ themeObject }) => {
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
        <IconButton
          title={`${
            state.isEditorHeightCollapsed ? "Expand" : "Collapse"
          } Editor`}
          onClick={() =>
            dispatch({
              type: "setIsEditorHeightCollapsed",
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
          iconPath={state.isEditorHeightCollapsed ? COLLAPSE_ICON : EXPAND_ICON}
        />

        <IconButton
          title={`${
            state.isEditorWidthCollapsed ? "Expand" : "Collapse"
          } Editor`}
          onClick={() =>
            dispatch({
              type: "setIsEditorWidthCollapsed",
              isEditorWidthCollapsed: state.isEditorWidthCollapsed,
            })
          }
          sx={{
            display: ["none", "none", "none", "block"],
          }}
          aria-label={`${
            state.isEditorWidthCollapsed ? "Expand" : "Collapse"
          } Editor`}
          iconPath={state.isEditorWidthCollapsed ? COLLAPSE_ICON : EXPAND_ICON}
        />

        <Button
          title="Copy Theme UI object"
          onClick={() =>
            copy(`export default \n${stringifyReplaceQuotes(themeObject)}`)
          }
        >
          Copy
        </Button>
      </Flex>
    </Toolbar>
  )
}

EditorToolbar.prototypes = {
  /** parent themeObject state value */
  themeObject: PropTypes.any,
}
