import { createGlobalStyle } from 'styled-components';
import { imgBackground } from './data/dados';

// Tá difícil fazer com que a borda branca em volta do background suma... 
// ps.: Dei um jeito e foi

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 100vh;
  }

  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    
    background-image: url(${imgBackground});
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat;
  }
`;

export default GlobalStyle;