// Tout part de cet index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css";

// Ici on indique où on pointe notre application 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
// Ici on appelle notre composant App et on fait un Render donc un rendu 
  <React.StrictMode>
      <App />
  </React.StrictMode>
);