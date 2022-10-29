import React from 'react';
import { render } from 'react-dom'
import ReactDOM from 'react-dom/client';
import './globalStyles/index.scss';
import App from './components/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
