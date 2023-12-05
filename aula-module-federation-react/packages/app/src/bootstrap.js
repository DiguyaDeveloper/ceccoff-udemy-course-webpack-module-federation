import App from './App';
import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = document.getElementById('root');
const rootElement = createRoot(root);

rootElement.render(<App />);