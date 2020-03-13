import React, { useEffect, useContext, Fragment } from "react"
import netlifyIdentity from "netlify-identity-widget"

import { SkinContext } from "../../context"

import { SET_IS_USER_LOGGED_IN } from "../../utils/const"

export const Identity = ({ children }) => {
  const { dispatch } = useContext(SkinContext)

  useEffect(() => {
    netlifyIdentity.init({})

    if (netlifyIdentity.currentUser()) {
      dispatch({
        type: SET_IS_USER_LOGGED_IN,
        user: netlifyIdentity.currentUser(),
      })
    }
  }, [])

  netlifyIdentity.on("login", user => {
    netlifyIdentity.close()
    dispatch({
      type: SET_IS_USER_LOGGED_IN,
      user: user,
    })
  })

  netlifyIdentity.on("logout", user => {
    netlifyIdentity.close()
    dispatch({ type: SET_IS_USER_LOGGED_IN, user: user })
  })

  return <Fragment>{children}</Fragment>
}
