import Home from './Home';
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = document.getElementById('root');

const createRoot = ReactDOM.createRoot || ReactDOM.unstable_createRoot;

const rootElement = createRoot(root);

rootElement.render(<Home />);