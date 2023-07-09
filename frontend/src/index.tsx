// COMPONENTS
import { AppRouter } from 'routes';
// REACT
import React from 'react';
import ReactDOM from 'react-dom/client';
// ROUTER
import { BrowserRouter } from 'react-router-dom';
// STYLES
import 'styles/tailwind_config.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </React.StrictMode>
);
