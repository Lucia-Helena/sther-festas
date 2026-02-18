import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    background-color: #FFF8E1;
    color: #2E2E2E;
    -webkit-font-smoothing: antialiased;
  }

  button {
    font-family: inherit;
  }
`;
