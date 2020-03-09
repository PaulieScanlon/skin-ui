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
  shadows: [
    "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
    "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
    "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
    "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
    "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
  ],
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
