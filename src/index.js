import { createRoot } from 'react-dom/client';
import App from './App/App.js';

const container = document.querySelector('#root');
const root = createRoot(container);
root.render(<App />);