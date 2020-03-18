/** @jsx jsx */
import { memo, useContext, useEffect } from "react"
import PropTypes from "prop-types"
import { jsx } from "theme-ui"
import { Flex, Box, Text, Spinner } from "@theme-ui/components"

import { Editor } from "../Editor"
import { EditorToolbar } from "../EditorToolbar"
import { Preview } from "../Preview"
import { PreviewToolbar } from "../PreviewToolbar"
import { Source } from "../Source"

import queryString from "query-string"

import { gql } from "apollo-boost"
import { useQuery } from "@apollo/react-hooks"

import { SkinContext } from "../../context"

import { ThemeWrapper } from "../ThemeWrapper"
import { useSiteMetadata } from "../../data/useSiteMetadata"

import {
  UPDATE_DEFAULT_THEME_OBJECT,
  DEFAULT_THEME_DATABASE_REF,
} from "../../utils/const"

const GET_THEME_BY_ID = gql`
  query GetThemeByIdQuery($theme_id: String!) {
    getThemeById(theme_id: $theme_id) {
      user_id
      theme_is_private
      theme_object
    }
  }
`

export const Application = memo(({ mdx }) => {
  const {
    site: {
      siteMetadata: {
        config: { sidebarWidth, editorCollapseWidth },
      },
    },
  } = useSiteMetadata()

  const { state, dispatch } = useContext(SkinContext)

  const urlQueryString =
    typeof window !== `undefined`
      ? queryString.parse(location.search).theme_id
      : ""

  const { loading, error, data } = useQuery(GET_THEME_BY_ID, {
    // TODO DEFAULT_THEME_DATABASE_REF is the default object from the database // should it be hardcoded?
    variables: { theme_id: urlQueryString || DEFAULT_THEME_DATABASE_REF },
  })

  useEffect(() => {
    if (!loading && !error && data) {
      dispatch({
        type: UPDATE_DEFAULT_THEME_OBJECT,
        defaultThemeObject: JSON.parse(data.getThemeById.theme_object),
      })
    }
  }, [data])

  const conditionalWidth = state.isFullScreen ? "100%" : "60%"

  return (
    <ThemeWrapper>
      {loading && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            ml: [0, 0, 0, state.isFullScreen ? 0 : sidebarWidth],
            p: 4,
          }}
        >
          <Spinner />
        </Box>
      )}
      {error && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            ml: [0, 0, 0, state.isFullScreen ? 0 : sidebarWidth],
            p: 4,
          }}
        >
          <Text>{`${error}`}</Text>
        </Box>
      )}
      {!loading && !error && (
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
              ml: [0, 0, 0, state.isFullScreen ? 0 : sidebarWidth],
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
      )}
    </ThemeWrapper>
  )
})

Application.propTypes = {
  /** React children passed from mdx */
  mdx: PropTypes.any,
}
