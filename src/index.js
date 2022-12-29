import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from "react-redux"
import store from './Redux/store'
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider, createTheme } from '@mui/material/styles'

import { persistor } from './Redux/store'
import { PersistGate } from 'redux-persist/integration/react'
const theme = createTheme({
  components: {
    MuiListItemButton: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            background: "linear-gradient(100deg,#2874ff,#2679c7)"
          },

        }
      }
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          '&.Mui-expanded': {
            maxHeight: "80vh",
            overflowY: "auto",
            position: "relative",
            margin: "16px 0"
          }
        }
      }
    }
  }
});

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter >
    </PersistGate>
  </Provider>

  ,
  document.getElementById('root')
);

