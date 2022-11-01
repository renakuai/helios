import React from 'react';
import { render } from 'react-dom'
import ReactDOM from 'react-dom/client';
import './globalStyles/index.scss';
import App from './components/App';
import GlobalTokens from './components/GlobalTokens.js';
import Buttons from './components/Buttons.js';
import SemanticTokens from './components/SemanticTokens.js'

import { BrowserRouter, Route, Routes } from "react-router-dom";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route index element={<GlobalTokens />} />
          <Route path="/semantic" element={<SemanticTokens />} />
          <Route path="/buttons" element={<Buttons />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
