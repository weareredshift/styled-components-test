import { createGlobalStyle } from 'styled-components';
import cssReset from './cssReset';

export default createGlobalStyle`
  ${cssReset}

  html {
    font-size: 10px;
    width: 100%;
    height: 100%;
  }

  body {
    background-color: ${p => p.theme.colors.almostWhite};
    ${p => p.theme.fontScale.b2};
    ${p => p.theme.fonts.regular};
    width: 100%;
    height: 100%;
  }
`;
