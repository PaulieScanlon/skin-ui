/** @jsx jsx */
import { useState, Fragment } from "react"
import PropTypes from "prop-types"
import { jsx } from "theme-ui"
import { Flex, Box } from "@theme-ui/components"

import { ThemeWrapper } from "../components/ThemeWrapper"
import { Header } from "../components/Header"
import { Sidebar } from "../components/Sidebar"
import { Lightbox } from "../components/Lightbox"
import { Editor } from "../components/Editor"
import { EditorToolbar } from "../components/EditorToolbar"
import { Preview } from "../components/Preview"
import { Source } from "../components/Source"
import { Seo } from "../components/Seo"

import { useSiteMetadata } from "../data/useSiteMetadata"

import defaultThemeObject from "../utils/defaultThemeObject"
import { PreviewToolbar } from "../components/PreviewToolbar"

if (typeof window !== `undefined`) {
  require("codemirror/lib/codemirror")
  require("codemirror/lib/codemirror.css")
}

export const MARKDOWN = "markdown"
export const COMPONENTS = "components"
const sidebarWidth = 210
const editorCollapseWidth = 60

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

  const [themeObject, setThemeObject] = useState(defaultThemeObject)
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [isFullScreen, setIsFullScreen] = useState(false)
  const [isEditorWidthCollapsed, setIsEditorWidthCollapsed] = useState(false)
  const [isEditorHeightCollapsed, setIsEditorHeightCollapsed] = useState(true)
  const [isSourceVisible, setIsSourceVisible] = useState(false)

  const [filterChildren, setFilterChildren] = useState({
    [MARKDOWN]: true,
    [COMPONENTS]: true,
  })

  const mdx = children.filter(child => filterChildren[child.props.className])

  const conditionalWidth = isFullScreen ? "100%" : "60%"

  const handleCheckboxChange = event => {
    setFilterChildren({
      ...filterChildren,
      [event.target.name]: !filterChildren[event.target.name],
    })
  }

  return (
    <Fragment>
      <Seo
        author={author}
        title={title}
        titleTemplate="Editor"
        description={description}
        url={url}
        ogImage={ogImage}
        path="/"
        keywords={keywords}
        lang={lang}
      />
      {!isFullScreen && (
        <Fragment>
          <Sidebar
            sidebarWidth={sidebarWidth}
            mdx={mdx}
            isNavOpen={isNavOpen}
          />
          <Lightbox
            onClick={() => setIsNavOpen(!isNavOpen)}
            isNavOpen={isNavOpen}
          />
          <Header
            onClick={() => setIsNavOpen(!isNavOpen)}
            sidebarWidth={sidebarWidth}
            isNavOpen={isNavOpen}
          />
        </Fragment>
      )}
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
            <Preview themeObject={themeObject} children={mdx} />
          )}
        </Box>
      </Flex>
    </Fragment>
  )
}

EditorLayout.propTypes = {
  /** React children passed from mdx */
  children: PropTypes.any,
}

export default EditorLayout
