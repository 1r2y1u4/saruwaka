import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import AppRoutes from './router';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);

reportWebVitals();
