/** @jsx jsx */
import { useContext, useEffect, Fragment } from "react"
import PropTypes from "prop-types"
import { jsx } from "theme-ui"
import { Box, Text, Spinner } from "@theme-ui/components"
import queryString from "query-string"

import { gql } from "apollo-boost"
import { useQuery } from "@apollo/react-hooks"

import { ThemeWrapper } from "../components/ThemeWrapper"
import { Header } from "../components/Header"
import { Sidebar } from "../components/Sidebar"
import { Sidenav } from "../components/Sidenav"
import { Drawer } from "../components/Drawer"
import { Settings } from "../components/Settings"
import { Lightbox } from "../components/Lightbox"
import { Application } from "../components/Application"
import { Seo } from "../components/Seo"

import { SkinContext } from "../context"

import { useSiteMetadata } from "../data/useSiteMetadata"

if (typeof window !== `undefined`) {
  require("codemirror/lib/codemirror")
  require("codemirror/lib/codemirror.css")
}

import {
  UPDATE_DEFAULT_THEME_OBJECT,
  DEFAULT_THEME_DATABASE_REF,
  SET_IS_USER_OWNER,
  SET_DATABASE_THEME_BY_ID,
} from "../utils/const"

const GET_THEME_BY_ID = gql`
  query GetThemeByIdQuery($theme_id: String!) {
    getThemeById(theme_id: $theme_id) {
      user_id
      theme_author
      theme_name
      theme_description
      theme_style
      theme_is_private
      theme_object
    }
  }
`

const EditorLayout = ({ children }) => {
  const {
    site: {
      siteMetadata: {
        author,
        title,
        description,
        url,
        ogImage,
        keywords,
        lang,
      },
    },
  } = useSiteMetadata()

  const { state, dispatch } = useContext(SkinContext)

  const mdx = children.filter(
    child => state.filterChildren[child.props.className]
  )

  const navItems = mdx.reduce((items, item) => {
    const { className } = item.props
    items[className] = items[className] = []
    items[className].push(
      item.props.children.filter(child =>
        child.props.children &&
        child.props.children.props &&
        child.props.children.props.href
          ? child
          : null
      )
    )

    return items
  }, [])

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
        type: SET_DATABASE_THEME_BY_ID,
        databaseThemeById: data.getThemeById,
      })

      if (state.user) {
        dispatch({
          type: SET_IS_USER_OWNER,
          isUserOwner:
            data.getThemeById.user_id === state.user.id ? true : false,
        })
      }

      dispatch({
        type: UPDATE_DEFAULT_THEME_OBJECT,
        defaultThemeObject: JSON.parse(data.getThemeById.theme_object),
      })
    }
  }, [data])

  return (
    <ThemeWrapper>
      <Seo
        author={author}
        title={title}
        titleTemplate="Editor"
        description={description}
        url={url}
        ogImage={ogImage}
        path="/editor"
        keywords={keywords}
        lang={lang}
      />

      {!state.isFullScreen && (
        <Fragment>
          {!loading && !error && (
            <Fragment>
              <Sidebar>
                {isElementVisible => (
                  <Sidenav
                    navItems={navItems}
                    isElementVisible={isElementVisible}
                  />
                )}
              </Sidebar>

              <Drawer>
                {isElementVisible => (
                  <Settings
                    isElementVisible={isElementVisible}
                    data={data ? data : ""}
                  />
                )}
              </Drawer>

              <Lightbox />
            </Fragment>
          )}
          <Header isEditorRoute={true} data={data ? data : ""} />
        </Fragment>
      )}
      {loading && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            // ml: [0, 0, 0, state.isFullScreen ? 0 : sidebarWidth],
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
            // ml: [0, 0, 0, state.isFullScreen ? 0 : sidebarWidth],
            p: 4,
          }}
        >
          <Text>{`${error}`}</Text>
        </Box>
      )}
      {!loading && !error && <Application mdx={mdx} />}
    </ThemeWrapper>
  )
}

EditorLayout.propTypes = {
  /** mdx children passed from parent */
  props: PropTypes.any,
}

export default EditorLayout
