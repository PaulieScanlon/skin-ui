/** @jsx jsx */
import { useState, Fragment } from "react"
import PropTypes from "prop-types"

import { jsx } from "theme-ui"
import { Flex, Box, Label, Checkbox, Button } from "@theme-ui/components"
import copy from "clipboard-copy"

import { Header } from "../components/Header"
import { Toolbar } from "../components/Toolbar"
import { Editor } from "../components/Editor"
import { Preview } from "../components/Preview"

import { stringifyReplaceQuotes } from "../utils/stringifyReplaceQuotes"

import defaultThemeObject from "../utils/defaultThemeObject"

export const MARKDOWN = "markdown"
export const COMPONENTS = "components"

const IndexPage = ({ children }) => {
  const [themeObject, setThemeObject] = useState(defaultThemeObject)

  const [filterChildren, setFilterChildren] = useState({
    [MARKDOWN]: true,
    [COMPONENTS]: true,
  })

  const handleChange = event => {
    setFilterChildren({
      ...filterChildren,
      [event.target.name]: !filterChildren[event.target.name],
    })
  }

  const mdx = children.filter(child => filterChildren[child.props.className])

  return (
    <Fragment>
      <Header />
      <Flex sx={{ flexWrap: "wrap" }}>
        <Box
          sx={{
            position: ["relative", "fixed"],
            left: ["0%", "60%"],
            width: ["100%", "40%"],
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
        <Box sx={{ width: ["100%", "60%"] }}>
          <Toolbar>
            <Flex>
              <Label mb={3}>
                <Checkbox
                  name={MARKDOWN}
                  defaultChecked
                  onChange={event => handleChange(event)}
                />
                Markdown
              </Label>
              <Label mb={3}>
                <Checkbox
                  name={COMPONENTS}
                  defaultChecked
                  onChange={event => handleChange(event)}
                />
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
