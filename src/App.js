import React from 'react';
import { Box, AppBar, Toolbar, Typography, IconButton, Container, Link as MuiLink, useTheme, alpha } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import LandingPage from './components/LandingPage';
import CountdownTimer from './components/CountdownTimer'; // Import the new component

export const APP_BAR_HEIGHT = 64;

function App({ toggleTheme }) {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const footerBgColor = alpha(theme.palette.background.paper, 0.55);

  // Define the launch date.
  // Important: Use a format that JavaScript's `Date` constructor understands well.
  // ISO 8601 format "YYYY-MM-DDTHH:mm:ss" is generally reliable.
  // This will be interpreted in the user's local timezone.
  // If you want it to be UTC, append 'Z': "2025-06-06T00:00:00Z"
  const LAUNCH_DATE = "2025-06-06T00:00:00";

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%', background: 'transparent' }}>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{ height: APP_BAR_HEIGHT, borderRadius: 0 }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', height: '100%' }}>
          <MuiLink href="/" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
            <Typography
              variant="h5"
              component="div"
              sx={{
                textAlign: 'left',
                fontFamily: theme.typography.monospace,
                fontWeight: 700,
                letterSpacing: '.05rem',
                mr: 2, // Add some margin if countdown is next to it
              }}
            >
              Architech
            </Typography>
          </MuiLink>

          {/* Container for Countdown and potentially other middle items */}
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <CountdownTimer targetDate={LAUNCH_DATE} />
          </Box>

          <IconButton sx={{ ml: 1 }} onClick={toggleTheme} color="inherit" aria-label="toggle theme">
            {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>

      <LandingPage />

      <Box
        component="footer"
        sx={{
          py: 2,
          px: 2,
          backgroundColor: footerBgColor,
          backdropFilter: 'blur(2px)',
          borderTop: (theme) => `1px solid ${alpha(theme.palette.divider,0.2)}`,
          textAlign: 'center',
          width: '100%',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="body2" color="text.secondary" sx={{fontFamily: theme.typography.monospace}}>
            {'© '} {new Date().getFullYear()} {' Architech by Akella. All rights reserved.'}
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}

export default App;