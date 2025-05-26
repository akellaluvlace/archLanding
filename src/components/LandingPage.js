import React from 'react';
import { Box, Container, Typography, Grid, Paper, useTheme, alpha, Link as MuiLink } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faPython, faGoogle, faStripe, faReddit, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faShieldAlt, faUsersGear, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import SpeedIcon from '@mui/icons-material/Speed';
import BuildIcon from '@mui/icons-material/Build';
import { APP_BAR_HEIGHT } from '../App';

const FeatureItem = ({ icon, title, children, faIcon }) => {
return (
<Box
sx={{
p: {xs: 2, sm: 2.5},
width: '100%',
mb: {xs: 2, md: 2.5},
display: 'flex',
flexDirection: {xs: 'column', md: 'row'},
alignItems: {xs: 'center', md: 'flex-start'},
textAlign: {xs: 'center', md: 'left'},
}}
>
<Box sx={{
mr: {md: 2.5},
mb: {xs: 1.5, md: 0},
display: 'flex',
justifyContent: 'center',
color: 'primary.main'
}}>
{faIcon ? (
<FontAwesomeIcon icon={faIcon} style={{ fontSize: '2.25rem' }} />
) : (
React.cloneElement(icon, { sx: { fontSize: 36 } })
)}
</Box>
<Box sx={{
minWidth: { md: 0 }
}}>
<Typography variant="h6" component="h3" sx={{ fontWeight: 'medium', mb: 0.5, overflowWrap: 'break-word' }}>
{title}
</Typography>
<Typography variant="body1" color="text.secondary" sx={{ overflowWrap: 'break-word' }}>
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

const socialLinks = [
{
href: "https://www.reddit.com/user/AkellaArchitech/",
icon: faReddit,
text: "u/AkellaArchitech",
label: "AkellaArchitech on Reddit"
},
{
href: "https://x.com/AkellaArchitech",
icon: faXTwitter,
text: "@AkellaArchitech",
label: "AkellaArchitech on X"
},
{
href: "https://www.youtube.com/@AkellaArchitech",
icon: faYoutube,
text: "@AkellaArchitech",
label: "AkellaArchitech on YouTube"
}
];

const features = [
  {
    faIcon: faUsersGear,
    title: "Prompt Like an Expert, Effortlessly",
    children: "Streamline your prompt engineering. Architech empowers novice and experienced users alike to build prompts with expert efficiency and optimal results, prioritizing user experience and workflow optimization."
  },
  {
    faIcon: faGraduationCap,
    title: "Explore & Master AI Prompting",
    children: "A dynamic learning tool. Experiment with prompts, discover the vast capabilities of AI, and master the art of prompt creation within an intuitive, interactive environment."
  },
  {
    icon: <BuildIcon />,
    title: "Intelligent Tools",
    children: "Unlock powerful features: Guided prompt building, AI-driven suggestions for each step, task-oriented search to quickly find what you need, and advanced refinement tools with clean, Markdown-ready output."
  },
  {
    icon: <SpeedIcon />,
    title: "Optimized Workflow",
    children: "Enhance your productivity with direct prompt editing, persistent history, and flexible Strict/Free modes that remember your settings and parameters for a consistent experience."
  },
  {
    faIcon: faGoogle,
    title: "Social Login",
    children: "Quick and easy access with Google authentication, powered by Django AllAuth."
  },
  {
    faIcon: faStripe,
    title: "Trusted Payments",
    children: "Secure subscription management integrated with Stripe for peace of mind."
  },
  {
    icon: <VerifiedUserIcon />,
    title: "Completely Secure",
    children: "HTTPS enabled and built with robust cyber security practices to protect your data."
  },
  {
    faIcon: faShieldAlt,
    title: "User Focused Design",
    children: "Crafted for both beginners and experts to master AI prompt creation effortlessly."
  },
  {
    faIcon: faReact,
    title: "Robust Frontend",
    children: "Modern, responsive SPA built with React & MUI for a seamless user experience."
  },
  {
    faIcon: faPython,
    title: "Powerful Backend",
    children: "Solid Django & PostgreSQL backend ensuring reliability and scalability."
  },
];

return (
<Box sx={{ flexGrow: 1, width: '100%', py: {xs: 3, md: 4} }}>
<Container maxWidth="md">
<Paper
elevation={0}
sx={{
display: 'flex',
flexDirection: 'column',
justifyContent: 'center',
alignItems: 'center',
minHeight: `calc(90vh - ${APP_BAR_HEIGHT}px - ${theme.spacing(8)})`, // Note: Original code had this, might need 'px' after theme.spacing(8) if it's a number.
width: '100%',
textAlign: 'center',
p: { xs: 2, sm: 3, md: 4 },
fontFamily: theme.typography.monospace,
color: heroTextColor,
mb: {xs: 4, md: 6},
}}
>
<Typography variant="h5" component="p" sx={{
mb: 1,
fontFamily: 'inherit',
color: 'inherit',
fontWeight: 'bold',
fontSize: { xs: '1.05rem', sm: '1.2rem', md: '1.5rem' },
overflowWrap: 'break-word',
}}>
AI without prompt engineering?
</Typography>
<Typography variant="h5" component="p" sx={{
mb: 1,
fontFamily: 'inherit',
color: 'inherit',
fontWeight: 'bold',
fontSize: { xs: '1.05rem', sm: '1.2rem', md: '1.5rem' },
overflowWrap: 'break-word',
}}>
Like throwing rocks at a supercar to start it.
</Typography>
<Typography variant="h5" component="p" sx={{
mb: {xs: 1.5, sm: 2},
fontFamily: 'inherit',
color: 'inherit',
fontWeight: 'bold',
fontSize: { xs: '1.05rem', sm: '1.2rem', md: '1.5rem' },
overflowWrap: 'break-word',
}}>
You don't want that rattle. You want push button magic.
</Typography>
<Typography variant="h1" component="p" sx={{
mt: {xs: 2, sm: 2.5, md: 3},
mb: {xs: 2, sm: 2.5, md: 3},
fontWeight: 'bold',
fontFamily: 'inherit',
color: 'inherit',
fontSize: { xs: '2.2rem', sm: '3.0rem', md: '4.0rem' },
overflowWrap: 'break-word',
}}>
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
          borderRadius: '30px',
          my: { xs: 2, sm: 2.5, md: 3.5 },
          border: `2px solid ${theme.palette.divider}`,
          transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
          '&:hover': {
            transform: 'scale(1.02)',
            boxShadow: `0px 10px 20px ${alpha(theme.palette.common.black, 0.2)}`,
          },
        }}
      />

      <Typography variant="h3" component="p" sx={{
        mt: {xs: 2, sm: 2.5, md: 3},
        mb: {xs: 1, sm: 1.5, md: 2},
        fontWeight: 'bold',
        fontFamily: 'inherit',
        color: 'inherit',
        fontSize: { xs: '1.4rem', sm: '2.0rem', md: '2.5rem' },
        overflowWrap: 'break-word',
      }}>
        To prompt easily.
      </Typography>
      <Typography variant="h3" component="p" sx={{
        fontWeight: 'bold',
        fontFamily: 'inherit',
        color: 'inherit',
        mb: {xs: 2.5, sm: 3, md: 3},
        fontSize: { xs: '1.4rem', sm: '2.0rem', md: '2.5rem' },
        overflowWrap: 'break-word',
      }}>
        To prompt like a Pro.
      </Typography>

      <Box
        sx={{
          mt: {xs: 2, sm: 3},
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'center',
          alignItems: 'center',
          gap: { xs: 2, sm: 4 },
          width: '100%',
          flexWrap: 'wrap',
        }}
      >
        {socialLinks.map((link) => (
          <MuiLink
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            key={link.href}
            sx={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              color: 'text.secondary',
              transition: theme.transitions.create('color', {
                duration: theme.transitions.duration.short,
              }),
              '&:hover': {
                color: 'primary.main',
              },
            }}
          >
            <FontAwesomeIcon icon={link.icon} style={{ marginRight: theme.spacing(1), fontSize: '1.5rem' }} />
            <Typography variant="body2" component="span" sx={{ fontFamily: 'inherit', fontWeight: 'medium' }}>
              {link.text}
            </Typography>
          </MuiLink>
        ))}
      </Box>
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
        {features.map((item, index) => (
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