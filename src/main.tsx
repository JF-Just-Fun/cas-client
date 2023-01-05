import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Router from './router';
import Store from './store';
import GlobalStyle from './style';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <Store>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Store>
  </React.StrictMode>,
);
