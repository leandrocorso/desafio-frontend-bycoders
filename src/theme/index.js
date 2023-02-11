import GlobalStyle from "./GlobalStyle";

const colors = {
  white: "#fff",
  black: "#fff",
  darkGray: "#333",
  gray: "#666",
  mediumGray: "#ddd",
  lightGray: "#eee",
  blue: "#009",
  primary: "#02be3b",
};

const fonts = {
  default: {
    family: "open-sans, sans-serif",
    weight: 400,
    size: "1rem",
    color: colors.darkGray,
    lineHeight: 1,
  },
};

const elements = {
  headings: {
    weight: 700,
    size: {
      h1: "1.7rem",
      h2: "1.5rem",
      h3: "1.3rem",
      h4: "1.2rem",
      h5: "1.2rem",
      h6: "1rem",
    },
  },
  links: {
    color: colors.darkGray,
    decoration: "underline",
    hover: {
      color: colors.darkGray,
      decoration: "underline",
    },
    active: {
      color: colors.gray,
      decoration: "none",
      hover: {
        color: colors.gray,
        decoration: "none",
      },
    },
  },
};

const theme = {
  colors,
  fonts,
  elements,
  spacement: "1rem",
};

export { GlobalStyle, theme };
