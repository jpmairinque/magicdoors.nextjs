import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`


  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
 
  html, body, #__next {
    height: 100%;
    background-color: #5429CC6b;
    color: #fff;
  }
 
  ::-webkit-scrollbar {
    width: 10px;
  }
  
  ::-webkit-scrollbar-thumb {
    background:  #f9a109; 
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #d68e11
  }
`;

export default GlobalStyles;