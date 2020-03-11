import React, { useEffect, Fragment } from "react"
import PropTypes from "prop-types"

import netlifyIdentify from "netlify-identity-widget"

import EditorLayout from "./EditorLayout"

if (typeof window !== `undefined`) {
  require("codemirror/lib/codemirror")
  require("codemirror/lib/codemirror.css")
}

const AppLayout = ({ children }) => {
  useEffect(() => {
    netlifyIdentify.init({})
  })

  return (
    <Fragment>
      {/* <button onClick={() => netlifyIdentify.open()}>Netlify</button> */}
      <EditorLayout children={children} />
    </Fragment>
  )
}

AppLayout.propTypes = {
  /** React children passed from mdx */
  children: PropTypes.any,
}

export default AppLayout
