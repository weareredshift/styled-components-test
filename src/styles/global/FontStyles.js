import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  h1,
  .typ--h1 {
    ${props => props.theme.fontScale.h1};
    ${props => props.theme.fonts.bold};
  }

  h2,
  .typ--h2 {
    ${props => props.theme.fontScale.h2};
    ${props => props.theme.fonts.bold};
  }

  .typ--b1 {
    ${props => props.theme.fontScale.b1};
    ${props => props.theme.fonts.regular};
  }

  .typ--b2 {
    ${props => props.theme.fontScale.b2};
    ${props => props.theme.fonts.regular};
  }
`;
