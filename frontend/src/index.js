import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import App2 from './App2';
import reportWebVitals from './reportWebVitals.js';
import{BrowserRouter} from 'react-router-dom';
import 'react-toastify/ReactToastify.css';
import { GlobalProvider } from './context/globalContext';
import { GlobalStyle } from './styles/Globalstyle.js';

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    <GlobalStyle />
    <GlobalProvider>
      <App2 />
    </GlobalProvider>
  </React.StrictMode>
);

reportWebVitals();