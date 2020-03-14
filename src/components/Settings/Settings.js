/** @jsx jsx */
import { useContext, memo } from "react"
import PropTypes from "prop-types"
import { jsx } from "theme-ui"

import {
  Box,
  Text,
  Button,
  Label,
  Input,
  Textarea,
  Radio,
  Divider,
} from "@theme-ui/components"
import copy from "clipboard-copy"

import { IconButton } from "../IconButton"
import { SkinContext } from "../../context"

import { stringifyReplaceQuotes } from "../../utils/stringifyReplaceQuotes"

import { COPY_ICON, DOWNLOAD_ICON } from "../../utils/iconPaths"

import { useSiteMetadata } from "../../data/useSiteMetadata"

const THEME_STYLE_LIGHT = "light"
const THEME_STYLE_DARK = "dark"

export const Settings = memo(({ isElementVisible }) => {
  const {
    site: {
      siteMetadata: { url },
    },
  } = useSiteMetadata()

  const { state } = useContext(SkinContext)

  return (
    <Box
      className="temp-settings"
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flex: "1 1 auto",
        }}
      >
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            mb: 3,
          }}
        >
          <Text sx={{ color: "muted", fontWeight: "bold", fontSize: 0, mr: 2 }}>
            Theme author:
          </Text>
          <Text sx={{ color: "muted", fontSize: 0 }}>
            {state.user && state.user.user_metadata.full_name}
          </Text>
        </Box>
        <Label>Theme Name</Label>
        <Input tabIndex={isElementVisible ? 0 : -1} />
        <Label>Theme Description</Label>
        <Textarea tabIndex={isElementVisible ? 0 : -1} />
        <Text
          sx={{
            color: "muted",
            fontSize: 0,
            fontWeight: "bold",
            mb: 2,
          }}
        >
          Theme Style
        </Text>

        <Box
          sx={{
            display: "flex",
          }}
        >
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              mr: 2,
            }}
          >
            <Label
              title="Theme style light"
              htmlFor={THEME_STYLE_LIGHT}
              sx={{
                fontWeight: "body",
              }}
            >
              <Radio
                tabIndex={isElementVisible ? 0 : -1}
                id={THEME_STYLE_LIGHT}
                name="theme-style"
                defaultChecked
                sx={{
                  mr: 1,
                }}
              />
              Light
            </Label>
          </Box>
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
            }}
          >
            <Label
              title="Theme style dark"
              htmlFor={THEME_STYLE_DARK}
              sx={{
                fontWeight: "body",
              }}
            >
              <Radio
                tabIndex={isElementVisible ? 0 : -1}
                id={THEME_STYLE_DARK}
                name="theme-style"
                sx={{
                  mr: 1,
                }}
              />
              Dark
            </Label>
          </Box>
        </Box>

        <Divider />

        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            mb: 1,
          }}
        >
          <IconButton
            variant="ghostIcon"
            title="Copy Theme UI object"
            aria-label="Copy Theme UI object"
            iconPath={COPY_ICON}
            onClick={() =>
              copy(
                `export default \n${stringifyReplaceQuotes(
                  state.defaultThemeObject
                )}`
              )
            }
            sx={{
              mr: 1,
            }}
          />
          <Text
            sx={{
              color: "muted",
              fontSize: 0,
            }}
          >
            Copy Theme UI object
          </Text>
        </Box>

        <Box
          sx={{
            alignItems: "center",
            display: "flex",
          }}
        >
          <IconButton
            as="a"
            download="skin-ui-source.zip"
            href={`${url}/skin-ui-source.zip`}
            variant="ghostIcon"
            title="Download source"
            aria-label="Download source"
            iconPath={DOWNLOAD_ICON}
            sx={{
              mr: 1,
            }}
          />
          <Text
            sx={{
              color: "muted",
              fontSize: 0,
            }}
          >
            Download source
          </Text>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          mb: 2,
        }}
      >
        <Button
          tabIndex={isElementVisible ? 0 : -1}
          title="Save Theme UI object"
          onClick={() => console.log("save")}
        >
          Save
        </Button>
      </Box>
    </Box>
  )
})

Settings.propTypes = {
  /** parent state isElementVisible */
  isElementVisible: PropTypes.bool,
}
