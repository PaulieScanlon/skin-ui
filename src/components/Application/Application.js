/** @jsx jsx */
import { memo, useContext } from "react"
import PropTypes from "prop-types"
import { jsx } from "theme-ui"
import { Flex, Box } from "@theme-ui/components"

import { Editor } from "../Editor"
import { EditorToolbar } from "../EditorToolbar"
import { Preview } from "../Preview"
import { PreviewToolbar } from "../PreviewToolbar"
import { Source } from "../Source"

import { SkinContext } from "../../context"

import { useSiteMetadata } from "../../data/useSiteMetadata"

export const Application = memo(({ mdx }) => {
  const {
    site: {
      siteMetadata: {
        config: { sidebarWidth, editorCollapseWidth },
      },
    },
  } = useSiteMetadata()

  const { state } = useContext(SkinContext)

  // console.log(state)

  const conditionalWidth = state.isFullScreen ? "100%" : "60%"

  return (
    <Flex sx={{ flexWrap: "wrap" }}>
      {!state.isFullScreen && (
        <Box
          sx={{
            position: ["relative", "relative", "relative", "fixed"],
            left: [
              "0%",
              "0%",
              "0%",
              `${
                state.isEditorWidthCollapsed
                  ? `calc(100% - ${editorCollapseWidth}px)`
                  : "60%"
              }`,
            ],
            // transition: ".3s ease-in-out left",
            width: ["100%", "100%", "100%", "40%"],
          }}
        >
          <EditorToolbar />
          <Editor />
        </Box>
      )}
      <Box
        sx={{
          marginLeft: [0, 0, 0, state.isFullScreen ? 0 : sidebarWidth],
          // transition: ".3s ease-in-out margin-left",
          // transition: ".3s ease-in-out width",
          width: [
            "100%",
            "100%",
            "100%",
            `calc(${
              state.isEditorWidthCollapsed
                ? `calc(100% - ${
                    state.isFullScreen ? 0 : editorCollapseWidth
                  }px)`
                : conditionalWidth
            } - ${state.isFullScreen ? 0 : sidebarWidth}px)`,
          ],
        }}
      >
        <PreviewToolbar />
        {state.isSourceVisible ? <Source /> : <Preview children={mdx} />}
      </Box>
    </Flex>
  )
})

Application.propTypes = {
  /** React children passed from mdx */
  mdx: PropTypes.any,
}
