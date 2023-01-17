import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 62.5%;
  }
  *{
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0
  }

  body {
    background-color: ${(props) => props.theme.white};
    color: ${(props) => props.theme['blue-700']};
    -webkit-font-smoothing: antialiased
  }

  body, input, text-area, button {
    font: 400 'Inter', sans-serif
  }

  ul, li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button, a {
    cursor: pointer;
  }
`;
