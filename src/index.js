import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App/App.js';

const container = document.querySelector('#root');
const root = createRoot(container);
root.render(<App />);