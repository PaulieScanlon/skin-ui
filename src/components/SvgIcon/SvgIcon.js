/** @jsx jsx */
import PropTypes from "prop-types"
import { jsx } from "theme-ui"

export const SvgIcon = ({ iconPath, ...sx }) => {
  return (
    <svg
      {...sx}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentcolor"
      viewBox="0 0 24 24"
      preserveAspectRatio="xMidYMid meet"
      x="0"
      y="0"
    >
      <path d={iconPath} fill="currentcolor" />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  )
}

SvgIcon.propTypes = {
  /** icon svg path */
  iconPath: PropTypes.string.isRequired,
  /** jsx sx spread */
  sx: PropTypes.any,
}
