import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles.css';

// The site is now a single page. Normalise any legacy/unknown path to the
// matching section on "/", so old bookmarks (and any stray URL) still land
// somewhere sensible instead of a 404.
const legacySections = {
  '/about-me': 'about',
  '/about': 'about',
  '/contact-me': 'contact',
  '/contact': 'contact',
};

if (window.location.pathname !== '/') {
  const target = legacySections[window.location.pathname] || '';
  const hash = target ? `#${target}` : window.location.hash;
  window.history.replaceState(null, '', `/${hash}`);
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
