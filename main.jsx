import React from 'react';
import ReactDOM from 'react-dom/client';
import { CampusProvider } from './context/CampusContext';
import { MainApp } from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CampusProvider>
      <MainApp />
    </CampusProvider>
  </React.StrictMode>
);
