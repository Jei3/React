import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global';

import theme from './styles/theme.js';

import { Routes } from './routes';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <GlobalStyles /> 
   <ThemeProvider theme={theme}>
    <Routes />
    </ThemeProvider>   
  </React.StrictMode>,
)
