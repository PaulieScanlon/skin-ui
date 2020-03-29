/** @jsx jsx */
import { jsx } from "theme-ui"
import { Box, Link } from "@theme-ui/components"

import { ThemeWrapper } from "../ThemeWrapper"

import { IconButton } from "../IconButton"
import { TWITTER_ICON, GITHUB_ICON } from "../../utils/iconPaths"

export const Footer = () => (
  <ThemeWrapper>
    <footer
      sx={{
        alignItems: "center",
        borderBottomStyle: 0,
        borderBottomColor: "gray",
        borderBottomWidth: 1,
        backgroundColor: "background",
        boxSizing: "border-box",
        color: "text",
        display: "flex",
        fontFamily: "body",
        justifyContent: "space-between",
        height: "header",
        p: theme => `${theme.space[2]}px ${theme.space[3]}px`,
        a: {
          ":focus": {
            outline: "none",
          },
        },
      }}
    >
      <Box>
        <Link
          href="https://twitter.com/PaulieScanlon"
          target="_blank"
          title="https://twitter.com/PaulieScanlon"
          aria-label="Twitter Username"
        >
          <IconButton tabIndex={-1} iconPath={TWITTER_ICON} />
        </Link>
        <Link
          href="https://github.com/PaulieScanlon/skin-ui"
          target="_blank"
          title="https://github.com/PaulieScanlon/skin-ui"
          aria-label="GitHub Repo"
          sx={{
            ml: 2,
          }}
        >
          <IconButton tabIndex={-1} iconPath={GITHUB_ICON} />
        </Link>
      </Box>
    </footer>
  </ThemeWrapper>
)
