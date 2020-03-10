/** @jsx jsx */
import { useState, Fragment } from "react"
import PropTypes from "prop-types"
import { jsx } from "theme-ui"
import { Flex, Box, Label, Checkbox, Button } from "@theme-ui/components"
import copy from "clipboard-copy"

import { Header } from "../components/Header"
import { Sidebar } from "../components/Sidebar"
import { Lightbox } from "../components/Lightbox"
import { Toolbar } from "../components/Toolbar"
import { Editor } from "../components/Editor"
import { Preview } from "../components/Preview"
import { Source } from "../components/Source"
import { IconButton } from "../components/IconButton"
import { ThemeWrapper } from "../components/ThemeWrapper"
import { Seo } from "../components/Seo"

import {
  EXPAND_ICON,
  COLLAPSE_ICON,
  ENTER_FULLSCREEN_ICON,
  EXIT_FULLSCREEN_ICON,
  PREVIEW_ICON,
  SOURCE_ICON,
} from "../utils/iconPaths"
import { stringifyReplaceQuotes } from "../utils/stringifyReplaceQuotes"
import { useSiteMetadata } from "../data/useSiteMetadata"

import defaultThemeObject from "../utils/defaultThemeObject"

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

  const handleChange = event => {
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
              width: ["100%", "100%", "100%", "40%"],
              transition: ".3s ease-in-out left",
            }}
          >
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
                    isEditorHeightCollapsed ? "Expand" : "Collapse"
                  } Editor`}
                  onClick={() =>
                    setIsEditorHeightCollapsed(!isEditorHeightCollapsed)
                  }
                  sx={{
                    display: ["block", "block", "block", "none"],
                    transform: "rotate(-90deg)",
                  }}
                  aria-label={`${
                    isEditorHeightCollapsed ? "Expand" : "Collapse"
                  } Editor`}
                  iconPath={
                    isEditorHeightCollapsed ? COLLAPSE_ICON : EXPAND_ICON
                  }
                />

                <IconButton
                  title={`${
                    isEditorWidthCollapsed ? "Expand" : "Collapse"
                  } Editor`}
                  onClick={() =>
                    setIsEditorWidthCollapsed(!isEditorWidthCollapsed)
                  }
                  sx={{
                    display: ["none", "none", "none", "block"],
                  }}
                  aria-label={`${
                    isEditorWidthCollapsed ? "Expand" : "Collapse"
                  } Editor`}
                  iconPath={
                    isEditorWidthCollapsed ? COLLAPSE_ICON : EXPAND_ICON
                  }
                />

                <Button
                  title="Copy Theme UI object"
                  onClick={() => copy(stringifyReplaceQuotes(themeObject))}
                >
                  Copy
                </Button>
              </Flex>
            </Toolbar>
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
            transition: ".3s ease-in-out margin-left",
            transition: ".3s ease-in-out width",
          }}
        >
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
                      onChange={event => handleChange(event)}
                    />
                  </div>
                  Markdown
                </Label>
                <Label title="Toggle Theme UI components visibility" mb={3}>
                  <div>
                    <Checkbox
                      name={COMPONENTS}
                      defaultChecked
                      onChange={event => handleChange(event)}
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
                      isFullScreen
                        ? EXIT_FULLSCREEN_ICON
                        : ENTER_FULLSCREEN_ICON
                    }
                  />

                  <IconButton
                    title={`View ${isSourceVisible ? "Preview" : "Source"}`}
                    onClick={() => setIsSourceVisible(!isSourceVisible)}
                    aria-label={`View ${
                      isSourceVisible ? "Preview" : "Source"
                    }`}
                    iconPath={isSourceVisible ? SOURCE_ICON : PREVIEW_ICON}
                  />
                </ThemeWrapper>
              </Box>
            </Flex>
          </Toolbar>
          {isSourceVisible ? (
            <Source />
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
