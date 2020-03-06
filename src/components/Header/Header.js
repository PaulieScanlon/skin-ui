/** @jsx jsx */
import { jsx } from "theme-ui"
import { ThemeWrapper } from "../ThemeWrapper"
import { Link } from "gatsby"
import { Logo } from "../Logo"

export const Header = () => (
  <ThemeWrapper>
    <header
      sx={{
        alignItems: "center",
        borderBottomStyle: 0,
        borderBottomColor: "surface",
        borderBottomWidth: 1,
        backgroundColor: "background",
        color: "text",
        display: "flex",
        height: 1,
        p: theme => `${theme.space[2]}px ${theme.space[3]}px`,
        position: "fixed",
        width: 0,
        zIndex: 0,
        a: {
          ":focus": {
            outline: "none",
          },
        },
      }}
    >
      <Link to="/">
        <Logo />
      </Link>
    </header>
    <div sx={{ height: 1 }} />
  </ThemeWrapper>
)
