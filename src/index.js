//index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { Buffer } from 'buffer';
import process from 'process';
window.process = process;


window.Buffer = Buffer;
window.process = process;
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);