import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { Router } from "@reach/router"

import EditorLayout from "./EditorLayout"
import LoginLayout from "./LoginLayout"
import LogoutLayout from "./LogoutLayout"
import IndexLayout from "./IndexLayout"

import { Identity } from "../components/Identity"

const AppLayout = ({ children }) => {
  return (
    <Identity>
      {user => {
        return (
          <Fragment>
            <Router basepath="/">
              <EditorLayout path="/editor" props={children} user={user} />
              <LoginLayout path="/login" />
              <LogoutLayout path="/logout" />
              <IndexLayout path="/" props={children} />
            </Router>
          </Fragment>
        )
      }}
    </Identity>
  )
}

AppLayout.propTypes = {
  /** React children passed from mdx */
  children: PropTypes.any,
}

export default AppLayout
