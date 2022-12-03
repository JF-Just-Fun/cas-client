import React from 'react';
import ReactDOM from 'react-dom/client';
import Container from './Index/Container';
import GlobalStyle from './style';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <Container />
  </React.StrictMode>,
);
