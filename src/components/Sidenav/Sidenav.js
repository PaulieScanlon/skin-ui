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
                    return (
                      <li
                        key={index}
                        sx={{
                          mb: 1,
                        }}
                      >
                        {href == hash ? (
                          <NavLink
                            tabIndex={isElementVisible ? 0 : -1}
                            title={children}
                            href={href}
                            sx={{
                              color: "primary",
                              textDecoration: "underline",
                              ":active": {
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
