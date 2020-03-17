import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { Router } from "@reach/router"

import { SkinContextProvider } from "../context"

import EditorLayout from "./EditorLayout"
import TestLayout from "./TestLayout"
import IndexLayout from "./IndexLayout"

import { Identity } from "../components/Identity"

const AppLayout = ({ children }) => {
  return (
    <SkinContextProvider>
      <Identity>
        <Fragment>
          <Router basepath="/">
            <TestLayout path="/test" />
            <EditorLayout path="/editor" props={children} />
            <IndexLayout path="/" props={children} />
          </Router>
        </Fragment>
      </Identity>
    </SkinContextProvider>
  )
}

AppLayout.propTypes = {
  /** React children passed from mdx */
  children: PropTypes.any,
}

export default AppLayout
