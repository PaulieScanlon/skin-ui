/** @jsx jsx */
import PropTypes from "prop-types"
import { jsx } from "theme-ui"
import { IconButton as ThemeUIIconButton } from "@theme-ui/components"

import { SvgIcon } from "../SvgIcon"

export const IconButton = ({ iconPath, sx, ...rest }) => {
  return (
    <ThemeUIIconButton {...rest} {...sx}>
      <SvgIcon iconPath={iconPath} />
    </ThemeUIIconButton>
  )
}

IconButton.propTypes = {
  /** Svg icon path */
  iconPath: PropTypes.string.isRequired,
  /** jsx sx spread */
  sx: PropTypes.any,
}
