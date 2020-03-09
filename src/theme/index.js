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
    muted: "#666666",
    highlight: "#67013E",
    gray: "#272727",
    accent: "#CC00FF",
    darken: "#212121",
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
  sizes: {
    max: "100%",
    header: 64,
    doubleHeader: 128,
    container: 1140,
  },
  space: [0, 4, 8, 16, 24, 32, 48],
  zIndices: {
    sidebar: 999,
    lightbox: 998,
    header: 997,
    toolbar: 996,
  },
  styles: {
    root: {
      //fontSize: "62.5%",
      wordBreak: "break-all",
      fontFamily: "body",
      lineHeight: "body",
    },
    h1: {
      lineHeight: "heading",
      marginTop: 0,
      marginBottom: 2,
    },
    p: {
      lineHeight: "body",
      marginTop: 0,
      marginBottom: 4,
      code: {
        fontSize: "1.1rem",
        p: 1,
        // color: "gray",
        backgroundColor: "gray",
      },
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
    secondary: {
      borderRadius: 0,
      cursor: "pointer",
      color: "gray",
      backgroundColor: "secondary",
      ":focus": {
        ...commonFocus,
      },
    },
    ghost: {
      borderRadius: 0,
      cursor: "pointer",
      backgroundColor: "darken",
      ":focus": {
        ...commonFocus,
      },
    },
  },
  layout: {
    container: {
      p: [3, 4, 6, 6],
    },
  },
  forms: {
    label: {
      fontSize: [0, 0, 0, 1],
      alignItems: "center",
      mb: "0px !important",
      wordBreak: "initial",
    },
    checkbox: {
      cursor: "pointer",
    },
  },
}
