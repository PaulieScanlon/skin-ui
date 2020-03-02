export default {
  // theme-spec
  borders: {},
  borderStyles: {},
  borderWidth: {},
  colors: {
    primary: "#E91E63",
    secondary: "#2196F3",
    surface: "#F7F7F7",
    text: "#000000",
    background: "#FFFFFF",
  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: "system-ui, sans-serif",
    monospace: "Menlo, monospace",
  },
  fontSizes: {},
  fontWeights: {},
  lettingSpacings: {},
  lineHeights: {},
  radii: {},
  shadows: {},
  sizes: {},
  space: [0, 4, 8],
  zIndices: {},

  // styles
  styles: {
    root: {
      fontFamily: "body",
    },
    h1: {
      color: "primary",
    },
    h2: {
      color: "primary",
    },
    h3: {
      color: "primary",
    },
    h4: {
      color: "primary",
    },
    h5: {
      color: "primary",
    },
    h6: {
      color: "primary",
    },
    p: {
      color: "text",
    },
    a: {
      color: "secondary",
    },
    pre: {
      backgroundColor: "surface",
      code: {
        color: "text",
        backgroundColor: "surface",
      },
    },
    progress: {},
    hr: {},
  },

  // variant groups
  grids: {},
  buttons: {
    //default
    primary: {},
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
    nav: {},
  },
  images: {
    // referenced by Avatar
    avatar: {},
  },
  cards: {
    // default
    primary: {},
  },
  layout: {
    // referenced by Container
    container: {},
  },
  forms: {},
  badges: {},
  alerts: {},
  messages: {},
}
