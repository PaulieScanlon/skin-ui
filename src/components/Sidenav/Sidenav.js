/** @jsx jsx */
import { memo } from "react"
import PropTypes from "prop-types"
import { jsx } from "theme-ui"
import { Location } from "@reach/router"
import { NavLink } from "@theme-ui/components"

import { ThemeWrapper } from "../ThemeWrapper"
import { navFocus } from "../../theme"

export const Sidenav = memo(({ navItems }) => {
  return (
    <ThemeWrapper>
      <Location>
        {({ location }) => {
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
                      if (href === hash) {
                        console.log("href: ", href, "| hash: ", hash)
                        console.log("")
                      }
                      return (
                        <li
                          key={index}
                          sx={{
                            mb: 1,
                          }}
                        >
                          <NavLink
                            title={children}
                            href={href}
                            sx={{
                              ":focus": {
                                ...navFocus,
                              },
                              textDecoration: `${
                                href === hash ? "underline" : "none"
                              }`,
                              color: `${href === hash ? "primary" : "muted"}`,
                            }}
                          >
                            {children}
                          </NavLink>
                          {/* <a
                            title={children}
                            href={href}
                            sx={{
                              ":focus": {
                                ...navFocus,
                              },
                              textDecoration: `${
                                href === hash ? "underline" : "none"
                              }`,
                              color: `${href === hash ? "primary" : "muted"}`,
                            }}
                          >
                            {children}
                          </a> */}
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
