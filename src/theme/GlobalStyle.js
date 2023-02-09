import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`${({ theme: { colors, elements, fonts } }) => `
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
    font-weight: ${elements.headings.weight};
  }
  
  h1 {
    font-size: ${elements.headings.size.h1};
    margin-bottom: ${elements.headings.size.h1};
  }
  
  h2 {
    font-size: ${elements.headings.size.h2};
    margin-bottom: ${elements.headings.size.h2};
  }
  
  h3 {
    font-size: ${elements.headings.size.h3};
    margin-bottom: ${elements.headings.size.h3};
  }
  
  h4,
  h5,
  h6 {
    font-size: ${elements.headings.size.h4};
    margin-bottom: ${elements.headings.size.h4};
  }

  a {
    color: ${elements.links.color};
    text-decoration: ${elements.links.decoration};
  }

  a:hover {
    color: ${elements.links.hover.color};
    text-decoration: ${elements.links.hover.decoration};
  }

  a.active {
    color: ${elements.links.active.color};
    text-decoration: ${elements.links.active.decoration};
  }

  a.active:hover {
    color: ${elements.links.active.hover.color};
    text-decoration: ${elements.links.active.hover.decoration};
  }

`}`;
