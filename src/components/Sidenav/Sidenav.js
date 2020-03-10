/** @jsx jsx */
import { memo } from "react"
import PropTypes from "prop-types"
import { jsx } from "theme-ui"
import { Link } from "@theme-ui/components"
import { Location } from "@reach/router"

import { ThemeWrapper } from "../ThemeWrapper"
import { navFocus } from "../../theme"

export const Sidenav = memo(({ navItems }) => {
  return (
    <ThemeWrapper>
      <Location>
        {({ location }) => {
          console.log("location: ", location)
          const { hash } = location
          return Object.keys(navItems).map((heading, index) => {
            return (
              <div key={index} sx={{ mb: 4 }}>
                <div
                  sx={{
                    color: "text",
                    fontFamily: "body",
                    fontSize: 2,
                    fontWeight: "bold",
                    textTransform: "capitalize",
                  }}
                >
                  {heading}
                </div>
                <ul
                  sx={{
                    fontFamily: "body",
                    listStyle: "none",
                    margin: 0,
                    p: theme => `0px ${theme.space[2]}px`,
                  }}
                >
                  {navItems[heading].map(item => {
                    return item.map((nav, index) => {
                      const { children, href } = nav.props.children.props
                      console.log("props: ", nav.props.children.props)
                      console.log("href: ", href)
                      return (
                        <li key={index} sx={{ mb: 1 }}>
                          <Link
                            title={children}
                            // to={href}
                            href={href}
                            sx={{
                              ":focus": {
                                ...navFocus,
                              },
                              textDecoration: `${
                                hash === href ? "underline" : "none"
                              }`,
                              color: `${hash === href ? "primary" : "muted"}`,
                            }}
                          >
                            {children}
                          </Link>
                        </li>
                      )
                    })
                  })}
                </ul>
              </div>
            )
          })
        }}
      </Location>
    </ThemeWrapper>
  )
})

Sidenav.propTypes = {
  /** navItems extracted from mdx */
  navItems: PropTypes.any,
}
