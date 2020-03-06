const commonFocus = {
  outline: "none",
  transition: ".2s linear box-shadow",
  boxShadow: theme => `0 0 0 2px ${theme.colors.muted}`,
}

export default {
  borderWidths: [0, 1],
  borderStyles: ["solid"],
  colors: {
    text: "#000000",
    background: "#FFFFFF",
    primary: "#ff0099",
    secondary: "#33ff00",
    surface: "#EEEEEE",
    muted: "#cc00ff",
    black: "#000000",
  },
  sizes: ["100%", "64px"],
  space: [0, 4, 8, 16, 24, 32, 48],
  zIndices: [999, 998, 997],
  styles: {
    root: {},
  },
  buttons: {
    // default
    primary: {
      borderRadius: 0,
      cursor: "pointer",
      ":focus": {
        ...commonFocus,
      },
    },
  },
  forms: {
    label: {
      alignItems: "center",
      mb: "0px !important",
    },
    checkbox: {
      borderRadius: 0,
      cursor: "pointer",
    },
  },
}
