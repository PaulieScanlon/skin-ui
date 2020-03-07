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

import { stringifyReplaceQuotes } from "../utils/stringifyReplaceQuotes"

import defaultThemeObject from "../utils/defaultThemeObject"

export const MARKDOWN = "markdown"
export const COMPONENTS = "components"
const sidebarWidth = 230

const IndexPage = ({ children }) => {
  const [themeObject, setThemeObject] = useState(defaultThemeObject)
  const [isNavOpen, setIsNavOpen] = useState(false)

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
      <Sidebar sidebarWidth={sidebarWidth} mdx={mdx} isNavOpen={isNavOpen} />
      <Lightbox
        onClick={() => setIsNavOpen(!isNavOpen)}
        isNavOpen={isNavOpen}
      />
      <Header onClick={() => setIsNavOpen(!isNavOpen)} isNavOpen={isNavOpen} />
      <Flex sx={{ flexWrap: "wrap" }}>
        <Box
          sx={{
            position: ["relative", "relative", "fixed"],
            left: ["0%", "0%", "60%"],
            width: ["100%", "100%", "40%"],
          }}
        >
          <Toolbar>
            <Flex
              sx={{
                flex: "1 1 auto",
                justifyContent: "flex-end",
              }}
            >
              <Button onClick={() => copy(stringifyReplaceQuotes(themeObject))}>
                Copy
              </Button>
            </Flex>
          </Toolbar>
          <Editor
            themeObject={themeObject}
            onChange={event => setThemeObject(event)}
          />
        </Box>
        <Box
          sx={{
            marginLeft: [0, 0, sidebarWidth],
            transition: ".3s ease-in-out margin-left",
            width: ["100%", "100%", `calc(60% - ${sidebarWidth}px)`],
          }}
        >
          <Toolbar>
            <Flex>
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
            </Flex>
          </Toolbar>
          <Preview themeObject={themeObject} children={mdx} />
        </Box>
      </Flex>
    </Fragment>
  )
}

IndexPage.propTypes = {
  /** React children passed from mdx */
  children: PropTypes.any,
}

export default IndexPage
