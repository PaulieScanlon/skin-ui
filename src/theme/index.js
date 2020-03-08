export const commonFocus = {
  outline: "none",
  transition: ".2s linear box-shadow",
  boxShadow: theme => `0 0 0 2px ${theme.colors.accent}`,
}

export const navFocus = {
  outline: "none",
  textDecoration: "none",
  "::before": {
    content: `'·'`,
    color: "primary",
    mr: 2,
  },
}

export default {
  borderWidths: [0, 1],
  borderStyles: ["solid"],
  colors: {
    text: "#FFFFFF",
    background: "#000000",
    primary: "#ff0099",
    secondary: "#33ff00",
    surface: "#212121",
    accent: "#9d015e",
    muted: "#666666",
    black: "#000000",
  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: "system-ui, sans-serif",
    monospace: "Menlo, monospace",
  },
  fontSizes: ["0.75rem", "1rem", "1.25rem"],
  lineHeights: {
    heading: 1,
    body: 1.5,
  },
  sizes: ["100%", "24px", "64px", "128px"],
  space: [0, 4, 8, 16, 24, 32, 48],
  zIndices: {
    sidebar: 999,
    lightbox: 998,
    header: 997,
    toolbar: 996,
  },
  styles: {
    root: {
      fontSize: 1,
      fontFamily: "body",
      lineHeight: "body",
    },
  },
  buttons: {
    primary: {
      borderRadius: 0,
      cursor: "pointer",
      ":focus": {
        ...commonFocus,
      },
    },
    ghost: {
      borderRadius: 0,
      cursor: "pointer",
      backgroundColor: "surface",
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
      cursor: "pointer",
    },
  },
}
