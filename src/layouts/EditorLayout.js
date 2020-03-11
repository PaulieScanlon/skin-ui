/** @jsx jsx */
import { useState, Fragment } from "react"
import PropTypes from "prop-types"
import { jsx } from "theme-ui"

import { Header } from "../components/Header"
import { Sidebar } from "../components/Sidebar"
import { Lightbox } from "../components/Lightbox"
import { Application } from "../components/Application"
import { Seo } from "../components/Seo"

import { useSiteMetadata } from "../data/useSiteMetadata"
import { MARKDOWN, COMPONENTS } from "../utils/const"

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
        config: { sidebarWidth },
      },
    },
  } = useSiteMetadata()

  const [isNavOpen, setIsNavOpen] = useState(false)
  const [isFullScreen, setIsFullScreen] = useState(false)

  const [filterChildren, setFilterChildren] = useState({
    [MARKDOWN]: true,
    [COMPONENTS]: true,
  })

  const mdx = children.filter(child => filterChildren[child.props.className])

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
        path="/editor"
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
      <Application
        children={mdx}
        isFullScreen={isFullScreen}
        setIsFullScreen={setIsFullScreen}
        handleCheckboxChange={handleCheckboxChange}
      />
    </Fragment>
  )
}

EditorLayout.propTypes = {
  /** React children passed from mdx */
  children: PropTypes.any,
}

export default EditorLayout
