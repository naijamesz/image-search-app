import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import searchImages from './api';

// Callback function to execute when mutations are observed
searchImages();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
  </>
);
