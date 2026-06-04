import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import gatoZoiando from './assets/gato_zoiando.jpg';

const imgPreload = new Image();
imgPreload.src = gatoZoiando;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);