import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`${({ theme: { colors, fonts } }) => `
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap");
    
* {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    list-style: none;
    font-family: ${fonts.default.family};
    font-weight: ${fonts.default.weight};
    font-size: ${fonts.default.size};
    line-height: ${fonts.default.lineHeight};
    color: ${fonts.default.color};
    box-sizing: border-box;
  }

  body {
    background: ${colors.white};
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: ${fonts.headings.weight};
  }
  
  h1 {
    font-size: ${fonts.headings.size.h1};
    margin-bottom: ${fonts.headings.size.h1};
  }
  
  h2 {
    font-size: ${fonts.headings.size.h2};
    margin-bottom: ${fonts.headings.size.h2};
  }
  
  h3 {
    font-size: ${fonts.headings.size.h3};
    margin-bottom: ${fonts.headings.size.h3};
  }
  
  h4,
  h5,
  h6 {
    font-size: ${fonts.headings.size.h4};
    margin-bottom: ${fonts.headings.size.h4};
  }

  a {
    color: ${fonts.links.color};
    decoration: ${fonts.links.decoration};
  }

  a:hover {
    color: ${fonts.links.hover.color};
    decoration: ${fonts.links.hover.decoration};
  }

  a.active {
    color: ${fonts.links.active.color};
    decoration: ${fonts.links.active.decoration};
  }

  a.active:hover {
    color: ${fonts.links.active.hover.color};
    decoration: ${fonts.links.active.hover.decoration};
  }

`}`;

export default GlobalStyle;
