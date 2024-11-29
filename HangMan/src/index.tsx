import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Appa';
import './styles.css'; // Optional: your CSS

const rootElement = document.getElementById('root')!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
