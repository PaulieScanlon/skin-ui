import React, { useEffect, useState, Fragment } from "react"
import netlifyIdentity from "netlify-identity-widget"

export const Identity = ({ children }) => {
  const [user, setUser] = useState(netlifyIdentity.currentUser())

  useEffect(() => {
    netlifyIdentity.init({})
  })

  netlifyIdentity.on("login", user => {
    netlifyIdentity.close()
    setUser(user)
  })

  netlifyIdentity.on("logout", user => {
    netlifyIdentity.close()
    setUser(user)
  })

  return <Fragment>{children(user)}</Fragment>
}
