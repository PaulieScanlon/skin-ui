/** @jsx jsx */
import PropTypes from "prop-types"
import { jsx } from "theme-ui"
import { Flex, Button } from "@theme-ui/components"
import copy from "clipboard-copy"

import { Toolbar } from "../Toolbar"
import { IconButton } from "../IconButton"

import { stringifyReplaceQuotes } from "../../utils/stringifyReplaceQuotes"

import { EXPAND_ICON, COLLAPSE_ICON } from "../../utils/iconPaths"

export const EditorToolbar = ({
  isEditorHeightCollapsed,
  setIsEditorHeightCollapsed,
  isEditorWidthCollapsed,
  setIsEditorWidthCollapsed,
  themeObject,
}) => (
  <Toolbar>
    <Flex
      sx={{
        alignItems: "center",
        flex: "1 1 auto",
        justifyContent: "space-between",
      }}
    >
      <IconButton
        title={`${isEditorHeightCollapsed ? "Expand" : "Collapse"} Editor`}
        onClick={() => setIsEditorHeightCollapsed(!isEditorHeightCollapsed)}
        sx={{
          display: ["block", "block", "block", "none"],
          transform: "rotate(-90deg)",
        }}
        aria-label={`${isEditorHeightCollapsed ? "Expand" : "Collapse"} Editor`}
        iconPath={isEditorHeightCollapsed ? COLLAPSE_ICON : EXPAND_ICON}
      />

      <IconButton
        title={`${isEditorWidthCollapsed ? "Expand" : "Collapse"} Editor`}
        onClick={() => setIsEditorWidthCollapsed(!isEditorWidthCollapsed)}
        sx={{
          display: ["none", "none", "none", "block"],
        }}
        aria-label={`${isEditorWidthCollapsed ? "Expand" : "Collapse"} Editor`}
        iconPath={isEditorWidthCollapsed ? COLLAPSE_ICON : EXPAND_ICON}
      />

      <Button
        title="Copy Theme UI object"
        onClick={() => copy(stringifyReplaceQuotes(themeObject))}
      >
        Copy
      </Button>
    </Flex>
  </Toolbar>
)

EditorToolbar.prototypes = {
  /** parent isEditorHeightCollapsed state value */
  isEditorHeightCollapsed: PropTypes.bool,
  /** parent setIsEditorHeightCollapsed function */
  setIsEditorHeightCollapsed: PropTypes.func,
  /** parent isEditorWidthCollapsed state value */
  isEditorWidthCollapsed: PropTypes.bool,
  /** parent setIsEditorWidthCollapsed function */
  setIsEditorWidthCollapsed: PropTypes.func,
  /** parent themeObject state value */
  themeObject: PropTypes.any,
}
