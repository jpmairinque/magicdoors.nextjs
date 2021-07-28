import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`


  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
 
  html, body {
    height: 100%;
    background: #2c2e43;
    color: white;
  }
 
  #__next{
    height: 100%;
  }
 
`;

export default GlobalStyles;