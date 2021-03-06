import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import App from './App';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
  
  a {
    color: inherit;
    text-decoration: inherit;
    cursor: inherit;
  }

  button, input {
    border: none;
    outline: none;
  }

  nav, div, a, button,
  h1, h2, h3, h4, h5, h6,
  input, label,
  header {
    box-sizing: border-box;
  }
`;

ReactDOM.render(
  <BrowserRouter>
    <div>
      <GlobalStyle />
      <App />
    </div>
  </BrowserRouter>,
  document.getElementById('root'),
);
