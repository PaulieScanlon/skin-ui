/** @jsx jsx */
import { useState, Fragment } from "react"
import PropTypes from "prop-types"
import { jsx } from "theme-ui"
import {
  Flex,
  Box,
  Label,
  Checkbox,
  Button,
  IconButton,
} from "@theme-ui/components"
import copy from "clipboard-copy"

import { Header } from "../components/Header"
import { Sidebar } from "../components/Sidebar"
import { Lightbox } from "../components/Lightbox"
import { Toolbar } from "../components/Toolbar"
import { Editor } from "../components/Editor"
import { Preview } from "../components/Preview"
import { Source } from "../components/Source"
import { SvgIcon } from "../components/SvgIcon"
import { ThemeWrapper } from "../components/ThemeWrapper"
import { Seo } from "../components/Seo"

import { commonFocus } from "../theme"
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
  const [isEditorWidthCollapsed, setIsEditorWidthCollapsed] = useState(false)
  const [isEditorHeightCollapsed, setIsEditorHeightCollapsed] = useState(true)
  const [isSourceVisible, setIsSourceVisible] = useState(false)

  const [filterChildren, setFilterChildren] = useState({
    [MARKDOWN]: true,
    [COMPONENTS]: true,
  })

  const mdx = children.filter(child => filterChildren[child.props.className])

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
      <Sidebar sidebarWidth={sidebarWidth} mdx={mdx} isNavOpen={isNavOpen} />
      <Lightbox
        onClick={() => setIsNavOpen(!isNavOpen)}
        isNavOpen={isNavOpen}
      />
      <Header
        onClick={() => setIsNavOpen(!isNavOpen)}
        sidebarWidth={sidebarWidth}
        isNavOpen={isNavOpen}
      />
      <Flex sx={{ flexWrap: "wrap" }}>
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
                onClick={() =>
                  setIsEditorHeightCollapsed(!isEditorHeightCollapsed)
                }
                sx={{
                  borderRadius: 0,
                  color: "text",
                  cursor: "pointer",
                  display: ["block", "block", "block", "none"],
                  transform: "rotate(-90deg)",
                  ":focus": {
                    ...commonFocus,
                  },
                }}
                aria-label={`${
                  isEditorHeightCollapsed ? "Expand" : "Collapse"
                } Editor`}
              >
                <SvgIcon
                  iconPath={
                    isEditorHeightCollapsed
                      ? "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"
                      : "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"
                  }
                />
              </IconButton>

              <IconButton
                onClick={() =>
                  setIsEditorWidthCollapsed(!isEditorWidthCollapsed)
                }
                sx={{
                  borderRadius: 0,
                  color: "text",
                  cursor: "pointer",
                  display: ["none", "none", "none", "block"],
                  ":focus": {
                    ...commonFocus,
                  },
                }}
                aria-label={`${
                  isEditorWidthCollapsed ? "Expand" : "Collapse"
                } Editor`}
              >
                <SvgIcon
                  iconPath={
                    isEditorWidthCollapsed
                      ? "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"
                      : "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"
                  }
                />
              </IconButton>

              <Button onClick={() => copy(stringifyReplaceQuotes(themeObject))}>
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
        <Box
          sx={{
            marginLeft: [0, 0, 0, sidebarWidth],
            width: [
              "100%",
              "100%",
              "100%",
              `calc(${
                isEditorWidthCollapsed
                  ? `calc(100% - ${editorCollapseWidth}px)`
                  : "60%"
              } - ${sidebarWidth}px)`,
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
                  display: "flex",
                }}
              >
                <Label mb={3} mr={2}>
                  <div>
                    <Checkbox
                      name={MARKDOWN}
                      defaultChecked
                      onChange={event => handleChange(event)}
                    />
                  </div>
                  Markdown
                </Label>
                <Label mb={3}>
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
              <Box>
                <ThemeWrapper>
                  <Button
                    variant="ghost"
                    onClick={() => setIsSourceVisible(!isSourceVisible)}
                  >{`${isSourceVisible ? "Out" : "Src"}`}</Button>
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
