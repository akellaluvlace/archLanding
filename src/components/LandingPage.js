import React from 'react';
// Removed Icon and Divider from this import as they were unused
import { Box, Container, Typography, Grid, Paper, useTheme, alpha } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faPython, faGoogle, faStripe } from '@fortawesome/free-brands-svg-icons';
import { faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import SpeedIcon from '@mui/icons-material/Speed';
import BuildIcon from '@mui/icons-material/Build';
// Removed: import { grey } from '@mui/material/colors'; // This was unused
import { APP_BAR_HEIGHT } from '../App'; // Assuming this path is correct

const FeatureItem = ({ icon, title, children, faIcon }) => {
  // Removed: const theme = useTheme(); // This was unused in FeatureItem
  return (
    <Box
      sx={{
        // Removed the first 'textAlign: 'left',' to resolve duplicate key
        p: {xs: 2, sm: 2.5},
        width: '100%',
        mb: {xs: 2, md: 2.5},
        display: 'flex',
        flexDirection: {xs: 'column', sm: 'row'},
        alignItems: {xs: 'center', sm: 'flex-start'},
        textAlign: {xs: 'center', sm: 'left'}, // Kept this responsive textAlign
      }}
    >
      <Box sx={{ mr: {sm: 2.5}, mb: {xs: 1.5, sm: 0}, display: 'flex', justifyContent: 'center', color: 'primary.main' }}>
        {faIcon ? (
          <FontAwesomeIcon icon={faIcon} style={{ fontSize: '2.25rem' }} />
        ) : (
          React.cloneElement(icon, { sx: { fontSize: 36 } })
        )}
      </Box>
      <Box>
        <Typography variant="h6" component="h3" sx={{ fontWeight: 'medium', mb: 0.5 }}>
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {children}
        </Typography>
      </Box>
    </Box>
  );
};

const LandingPage = () => {
  const theme = useTheme();
  const lightThemeImageUrl = "https://res.cloudinary.com/dsa31toc5/image/upload/v1747988302/aaa_rbt29n_fa124d.png";
  const darkThemeImageUrl = "https://res.cloudinary.com/dsa31toc5/image/upload/v1747988422/imageedit_10_7250209682_cqhwdg.jpg";

  const projectImageUrl = theme.palette.mode === 'dark' ? darkThemeImageUrl : lightThemeImageUrl;
  const heroTextColor = theme.palette.text.primary;

  return (
    <Box sx={{ flexGrow: 1, width: '100%', py: {xs: 3, md: 4} }}>
      <Container maxWidth="lg">
        <Paper
          elevation={0}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: `calc(90vh - ${APP_BAR_HEIGHT}px - ${theme.spacing(8)})`,
            maxHeight: `calc(100vh - ${APP_BAR_HEIGHT}px - ${theme.spacing(4)})`,
            width: '100%',
            textAlign: 'center',
            p: { xs: 2, sm: 4, md: 5 },
            fontFamily: theme.typography.monospace,
            color: heroTextColor,
            overflow: 'hidden',
            mb: {xs: 4, md: 6},
          }}
        >
          <Typography variant="h5" component="p" sx={{ mb: 1, fontFamily: 'inherit', color: 'inherit' }}>
            AI without prompt engineering?
          </Typography>
          <Typography variant="h5" component="p" sx={{ mb: 1, fontFamily: 'inherit', color: 'inherit' }}>
            Like throwing rocks at a supercar to start it.
          </Typography>
          <Typography variant="h5" component="p" sx={{ mb: 2, fontFamily: 'inherit', color: 'inherit' }}>
            You don't want that rattle. You want push button magic.
          </Typography>
          <Typography variant="h1" component="p" sx={{ mt:3, mb: 3, fontWeight: 'medium', fontFamily: 'inherit', color: 'inherit' }}>
            You want
          </Typography>

          <Box
            component="img"
            src={projectImageUrl}
            alt="Architech Application Interface"
            sx={{
              width: '100%',
              maxWidth: {xs: '85%', sm: '75%', md: '650px'},
              height: 'auto',
              borderRadius: '30px', // Keep existing border radius
              my: { xs: 2.5, md: 3.5 },
              border: `2px solid ${theme.palette.divider}`, // Added border
              transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out', // Added transition
              '&:hover': {
                transform: 'scale(1.02)', // Scale effect on hover
                boxShadow: `0px 10px 20px ${alpha(theme.palette.common.black, 0.2)}`, // Shadow effect on hover
              },
            }}
          />

          <Typography variant="h4" component="p" sx={{ mt:3, fontWeight: 'bold', fontFamily: 'inherit', color: 'text.secondary' }}>
            To prompt easily.
          </Typography>
          <Typography variant="h4" component="p" sx={{ fontWeight: 'bold', fontFamily: 'inherit', color: 'text.secondary' }}>
            To prompt like a pro.
          </Typography>
        </Paper>

        <Paper
            elevation={0}
            sx={{
                p: { xs: 2, sm: 3, md: 4 },
                width: '100%',
            }}
        >
          <Typography variant="h2" component="h2" textAlign="center" sx={{ fontWeight: 'bold', mb: {xs: 3, md: 5} }}>
            Why Architech?
          </Typography>
          <Grid container spacing={{xs: 2, md: 3}}>
            {[
                { faIcon: faReact, title: "Robust Frontend", children: "Modern, responsive SPA built with React & MUI for a seamless user experience." },
                { faIcon: faPython, title: "Powerful Backend", children: "Solid Django & PostgreSQL backend ensuring reliability and scalability." },
                { icon: <BuildIcon />, title: "Intelligent Tools", children: "Guided prompt building, AI suggestions, task-oriented search, and advanced refinement tools." },
                { icon: <SpeedIcon />, title: "Optimized Workflow", children: "Streamline your prompt engineering with features like direct editing, history, and strict/free modes." },
                { faIcon: faGoogle, title: "Social Login", children: "Quick and easy access with Google authentication, powered by Django AllAuth." },
                { faIcon: faStripe, title: "Trusted Payments", children: "Secure subscription management integrated with Stripe for peace of mind." },
                { icon: <VerifiedUserIcon />, title: "Completely Secure", children: "HTTPS enabled and built with robust cyber security practices to protect your data." },
                { faIcon: faShieldAlt, title: "User Focused Design", children: "Crafted for both beginners and experts to master AI prompt creation effortlessly." },
            ].map((item, index) => (
                <Grid item xs={12} sm={6} key={index}>
                    <FeatureItem {...item} />
                </Grid>
            ))}
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default LandingPage;