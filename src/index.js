import React, { useState, useMemo, useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';
import getTheme from './theme';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

const getInitialMode = () => {
  try {
    const savedMode = localStorage.getItem('landingThemeMode');
    if (savedMode === 'dark' || savedMode === 'light') {
      return savedMode;
    }
  } catch (error) {
    console.error("Could not read landingThemeMode from localStorage", error);
  }
  return 'dark';
};

function RootApp() {
  const [mode, setMode] = useState(getInitialMode());

  useEffect(() => {
    document.body.classList.remove('theme-light', 'theme-dark');
    if (mode === 'dark') {
      document.body.classList.add('theme-dark');
    } else {
      document.body.classList.add('theme-light');
    }
    try {
      localStorage.setItem('landingThemeMode', mode);
    } catch (error) {
      console.error("Could not save landingThemeMode to localStorage", error);
    }
  }, [mode]);

  const toggleTheme = useCallback(() => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  }, []);

  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <App toggleTheme={toggleTheme} />
        </BrowserRouter>
      </ThemeProvider>
    </React.StrictMode>
  );
}

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<RootApp />);
} else {
  console.error("Failed to find the root element. App will not render.");
}