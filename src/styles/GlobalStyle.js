import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
  font-size: 1.6rem;
  }

  * {
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    margin: 0;
    padding: 0;
    list-style: none;
    word-break: keep-all;
    box-sizing: border-box;
  }

  a {
    color: #000;
    text-decoration: none;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 1.9rem;
  }

  hr {
    border: 0px;
    background: #22DAAB;
    height: 0.1rem;
    margin-bottom: 5rem;
  }

  input {
    height: 5rem;
    width: 40rem;
    margin: 0.5rem 0;
    padding: 1rem;
    color: #A0A0A0;
    border: 1px solid #D8D8D8;
  }

  button {
    border: none;
    box-shadow: none;
    border-radius: 0;
  }

  label {
    color: #A0A0A0;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 1.9rem;
  }

`;

export default GlobalStyle;
