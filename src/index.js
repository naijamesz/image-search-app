import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import searchImages from './api';

// เรียกใช้แบบฟังก์ชั่น callback
searchImages();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
  </>
);
