/** @jsx jsx */
import PropTypes from "prop-types"
import { jsx } from "theme-ui"
import { ThemeWrapper } from "../ThemeWrapper"
import { commonFocus } from "../../theme"

import { useSiteMetadata } from "../../data/useSiteMetadata"

export const Logo = ({ isElementVisible, ...sx }) => {
  const {
    site: {
      siteMetadata: { url },
    },
  } = useSiteMetadata()

  console.log("sx: ", sx)

  return (
    <ThemeWrapper>
      <a
        tabIndex={isElementVisible ? 0 : -1}
        title={url}
        href="/"
        title={url}
        sx={{
          alignItems: "center",
          display: "flex",
          ":focus": {
            ...commonFocus,
          },
        }}
        {...sx}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 97 27"
          width="97"
          height="27"
        >
          <path
            sx={{ fill: "primary" }}
            d="M14.7,8.4H8.4V6.5c0-0.9-0.1-1.5-0.2-1.7C8,4.5,7.8,4.4,7.4,4.4C7,4.4,6.7,4.6,6.5,4.9C6.3,5.2,6.2,5.7,6.2,6.4
		c0,0.9,0.1,1.5,0.4,2c0.2,0.4,0.9,1,1.9,1.6c3,1.8,4.9,3.2,5.7,4.4s1.2,3,1.2,5.5c0,1.8-0.2,3.2-0.6,4.1s-1.3,1.6-2.5,2.2
		C10.9,26.7,9.4,27,7.8,27c-1.8,0-3.3-0.3-4.6-1S1,24.4,0.6,23.4c-0.4-1.1-0.6-2.6-0.6-4.5v-1.7h6.3v3.2c0,1,0.1,1.6,0.3,1.9
		c0.2,0.3,0.5,0.4,0.9,0.4s0.8-0.2,1-0.5c0.2-0.4,0.3-0.9,0.3-1.6c0-1.5-0.2-2.5-0.6-3c-0.4-0.5-1.5-1.3-3.2-2.4
		c-1.7-1.1-2.8-1.9-3.3-2.4s-1-1.2-1.4-2.1C0,9.8-0.2,8.7-0.2,7.3c0-2,0.3-3.4,0.8-4.4s1.3-1.6,2.5-2.2S5.6,0,7.2,0
		c1.7,0,3.2,0.3,4.5,0.8s2,1.3,2.4,2.1s0.6,2.3,0.6,4.4V8.4z"
          />
          <path
            sx={{ fill: "primary" }}
            d="M33.4,0.5l-3.9,11.7l4.2,14.2h-7l-2.7-11.1v11.1h-6.7V0.5h6.7v10.1l3-10.1H33.4z"
          />
          <path sx={{ fill: "primary" }} d="M41.7,0.5v25.9h-6.7V0.5H41.7z" />
          <path
            sx={{ fill: "primary" }}
            d="M59.4,0.5v25.9h-5.9L50,14.7v11.8h-5.6V0.5H50l3.8,11.7V0.5H59.4z"
          />
          <path sx={{ fill: "primary" }} d="M69.9,11.3v4.5h-8.5v-4.5H69.9z" />
          <path
            sx={{ fill: "primary" }}
            d="M87.1,0.5v17.3c0,2-0.1,3.3-0.2,4.1c-0.1,0.8-0.5,1.6-1.1,2.4c-0.6,0.8-1.5,1.5-2.5,1.9c-1,0.4-2.2,0.6-3.6,0.6
		c-1.5,0-2.9-0.3-4.1-0.8c-1.2-0.5-2.1-1.2-2.7-2s-0.9-1.7-1-2.6c-0.1-0.9-0.2-2.8-0.2-5.8V0.5h6.7V20c0,1.1,0.1,1.9,0.2,2.2
		s0.4,0.5,0.7,0.5c0.4,0,0.7-0.2,0.8-0.5s0.2-1.2,0.2-2.5V0.5H87.1z"
          />
          <path sx={{ fill: "primary" }} d="M96.4,0.5v25.9h-6.7V0.5H96.4z" />
        </svg>
      </a>
    </ThemeWrapper>
  )
}

Logo.propTypes = {
  /** parent state isElementVisible */
  isElementVisible: PropTypes.bool,
  /** jsx sx spread */
  sx: PropTypes.any,
}
