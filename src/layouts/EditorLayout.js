/** @jsx jsx */
import { useContext, Fragment } from "react"
import PropTypes from "prop-types"
import { jsx } from "theme-ui"

import { Header } from "../components/Header"
import { Sidebar } from "../components/Sidebar"
import { Lightbox } from "../components/Lightbox"
import { Application } from "../components/Application"
import { Seo } from "../components/Seo"

import { SkinContext } from "../context"

import { useSiteMetadata } from "../data/useSiteMetadata"

if (typeof window !== `undefined`) {
  require("codemirror/lib/codemirror")
  require("codemirror/lib/codemirror.css")
}

const EditorLayout = ({ props }) => {
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

  const mdx = props.filter(child => state.filterChildren[child.props.className])

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
          <Sidebar mdx={mdx} />
          <Lightbox />
          <Header showMenu={true} />
        </Fragment>
      )}
      <Application mdx={mdx} />
    </Fragment>
  )
}

EditorLayout.propTypes = {
  /** React children passed from parent */
  props: PropTypes.any,
}

export default EditorLayout
