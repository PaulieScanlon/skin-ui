/** @jsx jsx */
import { memo } from "react"
import PropTypes from "prop-types"
import { jsx } from "theme-ui"
import { Location } from "@reach/router"
import { NavLink, Text } from "@theme-ui/components"

import { ThemeWrapper } from "../ThemeWrapper"

export const Sidenav = memo(({ navItems, isElementVisible }) => (
  <ThemeWrapper>
    <Location>
      {({ location }) => {
        const { hash } = location
        return Object.keys(navItems).map((heading, index) => {
          return (
            <div key={index} sx={{ mb: 2 }}>
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
                  px: 0,
                  m: 0,
                }}
              >
                {navItems[heading].map(item => {
                  return item.map((nav, index) => {
                    const { children, href } = nav.props.children.props
                    return (
                      <li
                        key={index}
                        sx={{
                          mb: 1,
                        }}
                      >
                        {href === hash ? (
                          <NavLink
                            tabIndex={isElementVisible ? 0 : -1}
                            title={children}
                            href={href}
                            sx={{
                              color: "primary",
                              textDecoration: "underline",
                              width: "100%",
                              ":active, :hover": {
                                color: "primary",
                              },
                            }}
                          >
                            {children}
                          </NavLink>
                        ) : (
                          <NavLink
                            tabIndex={isElementVisible ? 0 : -1}
                            title={children}
                            href={href}
                            sx={{
                              width: "100%",
                            }}
                          >
                            {children}
                          </NavLink>
                        )}
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
))

Sidenav.propTypes = {
  /** navItems extracted from mdx */
  navItems: PropTypes.any,
  /** parent state isElementVisible */
  isElementVisible: PropTypes.bool,
}
