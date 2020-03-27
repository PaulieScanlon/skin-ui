import { lighten, darken } from "@theme-ui/color"

export const commonFocus = {
  outline: "none",
  transition: ".2s linear box-shadow",
  boxShadow: theme => `0 0 0 2px ${theme.colors.accent}`,
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
    highlight: "#ffceeb",
    gray: "#272727",
    accent: "#CC00FF",
    lighten: "#cccccc",
    darken: "#161616",
  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: "system-ui, sans-serif",
    monospace: "Menlo, monospace",
  },
  fontSizes: ["0.75rem", "0.95rem", "1.25rem"],
  fontWeights: {
    body: 400,
    heading: 700,
  },
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
    dropdown: 90,
  },
  space: [0, 4, 8, 16, 24, 32, 48],
  zIndices: {
    sidebar: 10,
    lightbox: 9,
    drawer: 8,
    header: 7,
    toolbar: 6,
  },
  styles: {
    root: {
      fontSize: 1,
      wordBreak: "break-all",
      fontFamily: "body",
      lineHeight: "body",
      minWidth: 320,
    },
    h1: {
      lineHeight: "heading",
      marginTop: 0,
      marginBottom: 2,
    },
    h2: {
      lineHeight: "heading",
      marginTop: 0,
      marginBottom: 3,
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

    a: {
      ":focus": {
        ...commonFocus,
      },
      button: {
        ":focus": {
          outline: "none",
        },
      },
    },
    hr: {
      mt: 3,
      mb: 3,
      color: "lighten",
    },
  },
  buttons: {
    primary: {
      borderRadius: 0,
      cursor: "pointer",
      fontSize: 1,
      textTransform: "uppercase",
      transition: ".2s linear background-color",
      ":hover": {
        background: darken("primary", 0.05),
      },
      ":focus": {
        ...commonFocus,
      },
    },
    secondary: {
      backgroundColor: "secondary",
      borderRadius: 0,
      cursor: "pointer",
      color: "gray",
      fontSize: 1,
      textTransform: "uppercase",
      transition: ".2s linear background-color, .1s linear color",
      ":hover": {
        color: "text",
        background: darken("secondary", 0.05),
      },
      ":focus": {
        ...commonFocus,
      },
    },
    ghost: {
      backgroundColor: "darken",
      borderRadius: 0,
      cursor: "pointer",
      fontSize: 1,
      textTransform: "uppercase",
      transition: ".2s linear background-color",
      ":hover": {
        background: lighten("darken", 0.05),
      },
      ":focus": {
        ...commonFocus,
      },
    },
    close: {
      borderRadius: 0,
      color: "text",
      cursor: "pointer",
      transition: ".2s linear background-color",
      ":hover": {
        background: lighten("darken", 0.05),
      },
      ":focus": {
        ...commonFocus,
      },
    },
    icon: {
      borderRadius: 0,
      color: "text",
      cursor: "pointer",
      transition: ".2s linear background-color",
      ":hover": {
        background: lighten("darken", 0.05),
      },
      ":focus": {
        ...commonFocus,
      },
    },
    ghostIcon: {
      borderRadius: 0,
      color: "gray",
      cursor: "pointer",
      transition: ".2s linear background-color",
      ":hover": {
        background: darken("lighten", 0.05),
      },
      ":focus": {
        ...commonFocus,
      },
    },
    menu: {
      borderRadius: 0,
      color: "text",
      cursor: "pointer",
      transition: ".2s linear background-color",
      ":hover": {
        background: lighten("darken", 0.05),
      },
      ":focus": {
        ...commonFocus,
      },
    },
  },
  text: {
    fontFamily: "body",
  },
  links: {
    nav: {
      color: "muted",
      fontWeight: "body",
      transition: ".2s linear color",
      ":hover": {
        color: "text",
      },
      ":focus": {
        outline: "none",
        color: "text",
      },
      ":active": {
        color: "text",
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
      color: "muted",
      fontFamily: "body",
      fontSize: 0,
      fontWeight: "bold",
      alignItems: "center",
      mb: 2,
      userSelect: "none",
      wordBreak: "initial",
    },
    input: {
      borderColor: "lighten",
      borderRadius: 0,
      p: 2,
      mb: 4,
      ":focus": {
        ...commonFocus,
      },
    },
    select: {
      color: "text",
      borderColor: "lighten",
      borderRadius: 0,
      ["svg"]: {
        color: "primary",
      },
    },
    textarea: {
      borderColor: "lighten",
      borderRadius: 0,
      p: 2,
      mb: 4,
      ":focus": {
        ...commonFocus,
      },
    },
    radio: {
      cursor: "pointer",
    },
    checkbox: {
      cursor: "pointer",
    },
  },
}
