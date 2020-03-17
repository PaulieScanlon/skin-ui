/** @jsx jsx */
import { useContext, Fragment } from "react"
import PropTypes from "prop-types"
import { jsx } from "theme-ui"

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

  const { state } = useContext(SkinContext)

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
      {!state.isFullScreen && (
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
              <Settings isElementVisible={isElementVisible} />
            )}
          </Drawer>
          <Lightbox />
          <Header isEditorRoute={true} />
        </Fragment>
      )}
      <Application mdx={mdx} />
    </Fragment>
  )
}

EditorLayout.propTypes = {
  /** mdx children passed from parent */
  props: PropTypes.any,
}

export default EditorLayout
