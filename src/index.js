import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <head>
        <meta name="description" content="Haydn Upstone's personal website" />
        <meta name="keywords" content="Haydn Upstone, Haydn, Nxera, CSL Seqirus, GlaxoKlineSmith" />
        <meta name="author" content="Haydn Upstone" />
      </head> 

      <App />
    </Router>
  </React.StrictMode>
);
