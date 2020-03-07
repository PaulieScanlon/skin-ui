export default {
  // theme-spec
  borders: ["1px"],
  borderStyles: ["solid", "dashed"],
  borderWidths: [1, 4],
  colors: {
    text: "#000000",
    background: "#FFFFFF",
    primary: "#0077CC",
    secondary: "#3300CC",
    muted: "#F6F6F6",
    highlight: "#B3D7FF",
    gray: "#808080",
    accent: "#FFFFFF",
    darken: "#FFFFFF",
  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: "system-ui, sans-serif",
    monospace: "Menlo, monospace",
  },
  fontSizes: [
    "0.75rem",
    "1rem",
    "1.25rem",
    "1.5rem",
    "2.125rem",
    "3rem",
    "3.5rem",
    "6rem",
  ],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lettingSpacings: {},
  lineHeights: {
    heading: 1,
    body: 1.5,
  },
  radii: [],
  shadows: [
    `0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)`,
    `0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)`,
    `0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)`,
    `0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)`,
    `0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)`,
  ],
  sizes: [],
  space: [0, 4, 8, 16, 24, 32],
  zIndices: [],
  breakpoints: [],

  // styles
  styles: {
    root: {
      fontSize: 1,
      fontFamily: "body",
      lineHeight: "body",
    },
    p: {
      color: "text",
      lineHeight: "body",
      code: {
        backgroundColor: "muted",
        color: "black",
        padding: 1,
      },
    },
    small: {
      fontSize: 0,
    },
    a: {
      color: "secondary",
    },
    h1: {
      color: "primary",
      fontSize: 7,
      fontWeight: "heading",
      lineHeight: "heading",
      marginTop: 0,
      marginBottom: 5,
      a: {
        color: "inherit",
      },
    },
    h2: {
      color: "primary",
      fontSize: 6,
      fontWeight: "heading",
      lineHeight: "heading",
      marginTop: 0,
      marginBottom: 4,
      a: {
        color: "inherit",
      },
    },
    h3: {
      color: "primary",
      fontSize: 5,
      fontWeight: "heading",
      lineHeight: "heading",
      marginTop: 0,
      marginBottom: 3,
      a: {
        color: "inherit",
      },
    },
    h4: {
      color: "primary",
      fontSize: 4,
      fontWeight: "heading",
      lineHeight: "heading",
      marginTop: 0,
      marginBottom: 3,
      a: {
        color: "inherit",
      },
    },
    h5: {
      color: "primary",
      fontSize: 3,
      fontWeight: "heading",
      lineHeight: "heading",
      marginTop: 0,
      marginBottom: 3,
      a: {
        color: "inherit",
      },
    },
    h6: {
      color: "primary",
      fontSize: 2,
      fontWeight: "heading",
      lineHeight: "heading",
      marginTop: 0,
      marginBottom: 3,
    },
    img: {},
    pre: {
      borderColor: "gray",
      borderStyle: 1,
      borderWidth: 0,
      backgroundColor: "muted",
      color: "black",
      lineHeight: "body",
      overflow: "auto",
      padding: 3,
      code: {
        backgroundColor: "muted",
        color: "black",
        lineHeight: "body",
      },
    },
    ol: {
      color: "text",
    },
    ul: {
      color: "text",
    },
    li: {
      color: "text",
      lineHeight: "body",
    },
    blockquote: {
      borderLeftColor: "primary",
      borderLeftStyle: 0,
      borderLeftWidth: 1,
      padding: 2,
      backgroundColor: "muted",
      p: {
        margin: 0,
      },
    },
    hr: {
      border: 0,
      borderStyle: 0,
      color: "muted",
      marginTop: 5,
      marginBottom: 5,
    },
    em: {},
    table: {
      border: 0,
      borderStyle: 0,
      borderColor: "gray",
      borderCollapse: "collapse",
      mb: 3,
    },
    tr: {},
    th: {
      backgroundColor: "muted",
      border: 0,
      borderStyle: 0,
      borderColor: "gray",
      padding: 2,
    },
    td: {
      border: 0,
      borderStyle: 0,
      borderColor: "gray",
      padding: 2,
    },
    strong: {},
    del: {},
    b: {},
    i: {},
    progress: {
      backgroundColor: "highlight",
      color: "primary",
      secondary: {
        backgroundColor: "highlight",
        color: "secondary",
      },
    },
    donut: {
      primary: {
        color: "primary",
      },
      secondary: {
        color: "secondary",
      },
    },
    spinner: {
      primary: {
        color: "primary",
      },
      secondary: {
        color: "secondary",
      },
    },
  },

  // variant groups
  box: {
    color: "text",
  },
  flex: {},
  grids: {},
  buttons: {
    //default
    backgroundColor: "primary",
    secondary: {
      backgroundColor: "secondary",
    },
    // referenced by Close component
    close: {},
    // referenced by IconButon component
    icon: {},
    // referenced by MenuButton component
    menu: {},
  },
  text: {
    text: {},
    heading: {},
  },
  links: {
    // referenced by NavLink
    nav: {
      color: "secondary",
    },
  },
  images: {
    // referenced by Avatar
    avatar: {},
  },
  cards: {
    // default
    primary: {
      boxShadow: 0,
      backgroundColor: "background",
    },
  },
  layout: {
    // referenced by Container
    container: {},
  },
  forms: {
    label: {
      alignItems: "center",
      fontWeight: "bold",
      marginBottom: 2,
    },
    input: {},
    select: {},
    textarea: {},
    slider: {
      color: "primary",
      backgroundColor: "highlight",
    },
    radio: {},
    checkbox: {},
  },
  badges: {
    primary: {
      backgroundColor: "primary",
    },
    secondary: {
      backgroundColor: "secondary",
    },
  },
  alerts: {
    primary: {
      backgroundColor: "primary",
    },
    secondary: {
      backgroundColor: "secondary",
    },
  },
  messages: {
    primary: {
      backgroundColor: "muted",
      borderLeftColor: "primary",
    },
    secondary: {
      backgroundColor: "muted",
      borderLeftColor: "secondary",
    },
  },
}
