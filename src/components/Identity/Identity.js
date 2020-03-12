import React, { useEffect, useContext, Fragment } from "react"
import netlifyIdentity from "netlify-identity-widget"

import { SkinContext } from "../../context"

export const Identity = ({ children }) => {
  const { dispatch } = useContext(SkinContext)

  useEffect(() => {
    netlifyIdentity.init({})

    if (netlifyIdentity.currentUser()) {
      dispatch({
        type: "setIsUserLoggedIn",
        user: netlifyIdentity.currentUser(),
      })
    }
  }, [])

  netlifyIdentity.on("login", user => {
    netlifyIdentity.close()
    dispatch({
      type: "setIsUserLoggedIn",
      user: user,
    })
  })

  netlifyIdentity.on("logout", user => {
    netlifyIdentity.close()
    dispatch({ type: "setIsUserLoggedIn", user: user })
  })

  return <Fragment>{children}</Fragment>
}
