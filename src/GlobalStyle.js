import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Open Sans", serif;
    
  }
  body {
    background-color: #f1ebeb;
  }
`;

export default GlobalStyle;
