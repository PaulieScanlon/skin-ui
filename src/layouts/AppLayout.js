import React, { Fragment } from "react"
import PropTypes from "prop-types"

import EditorLayout from "./EditorLayout"

if (typeof window !== `undefined`) {
  require("codemirror/lib/codemirror")
  require("codemirror/lib/codemirror.css")
}

const AppLayout = ({ children }) => {
  return (
    <Fragment>
      <EditorLayout children={children} />
    </Fragment>
  )
}

AppLayout.propTypes = {
  /** React children passed from mdx */
  children: PropTypes.any,
}

export default AppLayout
