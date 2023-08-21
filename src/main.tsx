import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Router from './router';
import Store from './store';
import GlobalStyle from './style';

const base = import.meta.env.VITE_ROUTER_BASE;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <Store>
      <BrowserRouter basename={base}>
        <Router />
      </BrowserRouter>
    </Store>
  </React.StrictMode>,
);
