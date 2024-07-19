import { createGlobalStyle } from 'styled-components';

import 'modern-normalize';

import HeeboRegular from '../fonts/Heebo-Regular.ttf';
import HeeboMedium from '../fonts/Heebo-Medium.ttf';
import HeeboSemiBold from '../fonts/Heebo-SemiBold.ttf';
import HeeboBold from '../fonts/Heebo-Bold.ttf';

export const GlobalStyle = createGlobalStyle`

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


html {
  scroll-behavior: smooth;
  }

@font-face {
    font-family: 'Inter';
    src: url(${HeeboRegular});
    font-weight: normal;
    font-style: normal;
  }

@font-face {
    font-family: 'Manrope';
    src: url(${HeeboMedium});
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Manrope';
    src: url(${HeeboSemiBold});
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Manrope';
    src: url(${HeeboBold});
    font-weight: bold;
    font-style: normal;
  }

body {
width: 100%;
min-width: 320px;
max-width: 1440px;
height: 100vh;
margin: 0 auto;
font-family: 'Heebo', -apple-system, BlinkMacSystemFont, 
    sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
}

body.modal-open {
  overflow: hidden;
}

ul 
 {
    list-style: none;
  }

button {
    cursor: pointer;
}

input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px transparent inset !important;
    -webkit-text-fill-color: transparent !important;
  }

`;
