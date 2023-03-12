import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global';

import theme from './styles/theme';

import { Details } from './pages/Details';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <GlobalStyles /> 
   <ThemeProvider theme={theme}>
    <Details />
    </ThemeProvider>   
  </React.StrictMode>,
)
