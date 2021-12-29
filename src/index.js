import React from 'react';
import ReactDOM from 'react-dom';
import './root.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import App from './app/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
