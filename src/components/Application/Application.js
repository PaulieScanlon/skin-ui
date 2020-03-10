/** @jsx jsx */
import { useState, memo } from "react"
import PropTypes from "prop-types"
import { jsx } from "theme-ui"
import { Flex, Box } from "@theme-ui/components"

import { Editor } from "../Editor"
import { EditorToolbar } from "../EditorToolbar"
import { Preview } from "../Preview"
import { PreviewToolbar } from "../PreviewToolbar"
import { Source } from "../Source"

import defaultThemeObject from "../../utils/defaultThemeObject"

import { useSiteMetadata } from "../../data/useSiteMetadata"

export const Application = memo(
  ({ children, isFullScreen, setIsFullScreen, handleCheckboxChange }) => {
    const {
      site: {
        siteMetadata: {
          config: { sidebarWidth, editorCollapseWidth },
        },
      },
    } = useSiteMetadata()

    const [themeObject, setThemeObject] = useState(defaultThemeObject)
    const [isEditorWidthCollapsed, setIsEditorWidthCollapsed] = useState(false)
    const [isEditorHeightCollapsed, setIsEditorHeightCollapsed] = useState(true)
    const [isSourceVisible, setIsSourceVisible] = useState(false)

    const conditionalWidth = isFullScreen ? "100%" : "60%"

    return (
      <Flex sx={{ flexWrap: "wrap" }}>
        {!isFullScreen && (
          <Box
            sx={{
              position: ["relative", "relative", "relative", "fixed"],
              left: [
                "0%",
                "0%",
                "0%",
                `${
                  isEditorWidthCollapsed
                    ? `calc(100% - ${editorCollapseWidth}px)`
                    : "60%"
                }`,
              ],
              transition: ".3s ease-in-out left",
              width: ["100%", "100%", "100%", "40%"],
            }}
          >
            <EditorToolbar
              isEditorHeightCollapsed={isEditorHeightCollapsed}
              setIsEditorHeightCollapsed={setIsEditorHeightCollapsed}
              isEditorWidthCollapsed={isEditorWidthCollapsed}
              setIsEditorWidthCollapsed={setIsEditorWidthCollapsed}
              themeObject={themeObject}
            />
            <Editor
              isEditorHeightCollapsed={isEditorHeightCollapsed}
              themeObject={themeObject}
              onChange={event => setThemeObject(event)}
            />
          </Box>
        )}
        <Box
          sx={{
            marginLeft: [0, 0, 0, isFullScreen ? 0 : sidebarWidth],
            transition: ".3s ease-in-out margin-left",
            transition: ".3s ease-in-out width",
            width: [
              "100%",
              "100%",
              "100%",
              `calc(${
                isEditorWidthCollapsed
                  ? `calc(100% - ${isFullScreen ? 0 : editorCollapseWidth}px)`
                  : conditionalWidth
              } - ${isFullScreen ? 0 : sidebarWidth}px)`,
            ],
          }}
        >
          <PreviewToolbar
            handleCheckboxChange={handleCheckboxChange}
            isFullScreen={isFullScreen}
            setIsFullScreen={setIsFullScreen}
            isSourceVisible={isSourceVisible}
            setIsSourceVisible={setIsSourceVisible}
          />
          {isSourceVisible ? (
            <Source isFullScreen={isFullScreen} />
          ) : (
            <Preview themeObject={themeObject} children={children} />
          )}
        </Box>
      </Flex>
    )
  }
)

Application.propTypes = {
  /** React children passed from mdx */
  children: PropTypes.any,
  /** parent isFullScreen state value */
  isFullScreen: PropTypes.bool,
  /** parent setIsFullScreen function */
  setIsFullScreen: PropTypes.func,
  /** parent handleCheckboxChange funtion */
  handleCheckboxChange: PropTypes.func,
}
