import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from "@material-tailwind/react";
import { Provider } from 'react-redux';
import { store } from './app/Store';


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider>
        <App className="bg-[##1C1C1E]" />
      </ThemeProvider>
    </Provider>
  </BrowserRouter>
);
