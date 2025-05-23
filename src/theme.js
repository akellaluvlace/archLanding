import { createTheme, alpha } from '@mui/material/styles';
import { blue, teal, grey } from '@mui/material/colors';

// --- Define the target grey color ---
const targetLightTextGrey = grey[700];

// --- Light Theme Colors ---
const primaryColorLight = blue[600];
const secondaryColorLight = teal[500];
const backgroundColorDefaultLight = grey[100]; // Slightly off-white for body
const backgroundColorPaperLight = '#ffffff'; // Will be made transparent by alpha in MuiPaper
const textPrimaryLight = targetLightTextGrey;
const textSecondaryLight = grey[600];
const dividerColorLight = alpha(grey[500], 0.2);
const disabledTextLight = grey[500];

// --- Dark Theme Colors ---
const primaryColorDark = blue[300];
const secondaryColorDark = teal[300];
const backgroundColorDefaultDark = grey[900]; // Body background
const backgroundColorPaperDark = grey[800]; // Will be made transparent by alpha in MuiPaper
const textPrimaryDark = grey[50];
const textSecondaryDark = grey[400];
const dividerColorDark = alpha(grey[500], 0.3);
const disabledTextDark = grey[600];

const monospaceFontStack = '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace';

const baseThemeOptions = {
  shape: {
    borderRadius: 22, // Slightly increased for modern feel
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    monospace: monospaceFontStack,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    lineHeight: 1.6,
    h1: {
      fontWeight: 700,
      fontSize: '3rem',
      lineHeight: 1.2,
      marginBottom: '1rem',
      '@media (max-width:899.95px)': {
        fontSize: '2.5rem',
      },
      '@media (max-width:599.95px)': {
        fontSize: '2rem',
      },
    },
    h2: {
      fontWeight: 600,
      fontSize: '2.25rem',
      lineHeight: 1.3,
      marginBottom: '1.5rem',
      marginTop: '2.5rem',
      '@media (max-width:899.95px)': {
        fontSize: '2rem',
        marginTop: '2rem',
      },
      '@media (max-width:599.95px)': {
        fontSize: '1.75rem',
        marginTop: '1.5rem',
      },
    },
    h3: {
      fontWeight: 500,
      fontSize: '2rem',
      lineHeight: 1.3,
      '@media (max-width:899.95px)': {
        fontSize: '1.75rem',
      },
      '@media (max-width:599.95px)': {
        fontSize: '1.5rem',
      },
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.75rem',
      lineHeight: 1.3,
      marginBottom: '1.5rem',
      '@media (max-width:599.95px)': {
        fontSize: '1.5rem',
        marginBottom: '1.25rem',
      },
    },
     h5: {
        fontWeight: 400,
        fontSize: '1.5rem',
        lineHeight: 1.4,
        '@media (max-width:899.95px)': {
            fontSize: '1.25rem',
        },
        '@media (max-width:599.95px)': {
            fontSize: '1.1rem',
        },
    },
    h6: {
        fontWeight: 600, // Kept original weight
        fontSize: '1.1rem', // Kept original size
        marginBottom: '1rem', // Kept original margin
        '@media (max-width:599.95px)': { // Kept original responsive
            fontSize: '1rem',
            marginBottom: '0.75rem',
        },
    },
    body1: {
      fontSize: '1.1rem', // Kept original size
      lineHeight: 1.7, // Kept original line height
       '@media (max-width:599.95px)': { // Kept original responsive
        fontSize: '1rem',
      },
    },
  },
  spacing: 8,
  transitions: {
     duration: {
       shortest: 150,
       shorter: 200,
       short: 250,
       standard: 300,
       complex: 375,
       enteringScreen: 225,
       leavingScreen: 195,
     },
     easing: {
       easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
       easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
       easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
       sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
     },
  },
  shadows: [ // Subtle shadows for glass cards
    'none',
    '0px 4px 6px -1px rgba(0,0,0,0.05), 0px 2px 4px -1px rgba(0,0,0,0.03)', // shadow[1]
    '0px 10px 15px -3px rgba(0,0,0,0.05), 0px 4px 6px -2px rgba(0,0,0,0.02)', // shadow[2]
    '0px 20px 25px -5px rgba(0,0,0,0.05), 0px 10px 10px -5px rgba(0,0,0,0.02)', // shadow[3]
    '0px 25px 50px -12px rgba(0,0,0,0.1)', // shadow[4] - A slightly stronger shadow for hover/emphasis
    ...Array(20).fill('none'), // Fill remaining shadows
  ],
  components: {
    MuiCssBaseline: {
      styleOverrides: (themeParam) => ({
        body: {
          backgroundColor: themeParam.palette.background.default,
          scrollbarColor: `${themeParam.palette.mode === 'light' ? grey[400] : grey[600]} ${themeParam.palette.background.default}`,
          '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
            backgroundColor: themeParam.palette.background.default,
            width: '8px',
            height: '8px',
          },
          '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
            borderRadius: 8,
            backgroundColor: themeParam.palette.mode === 'light' ? grey[400] : grey[600],
            minHeight: 24,
            border: `2px solid ${themeParam.palette.background.default}`,
          },
          '&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus': {
            backgroundColor: themeParam.palette.mode === 'light' ? grey[500] : grey[700],
          },
          '&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active': {
            backgroundColor: themeParam.palette.mode === 'light' ? grey[500] : grey[700],
          },
          '&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover': {
            backgroundColor: themeParam.palette.mode === 'light' ? grey[500] : grey[700],
          },
          '&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner': {
            backgroundColor: themeParam.palette.background.default,
          },
        },
      }),
    },
    MuiPaper: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: alpha(theme.palette.background.paper, 0.3),
          backdropFilter: 'blur(2px)',
          boxShadow: theme.shadows[2],
          borderRadius: theme.shape.borderRadius, // Uses the updated borderRadius
        }),
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: alpha(theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[800], 0.6),
          backdropFilter: 'blur(2px)',
          borderBottom: `1px solid 0px`,
          boxShadow: 'none',
          color: theme.palette.text.primary,
        }),
      }
    },
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          textTransform: 'none',
          padding: theme.spacing(1, 2),
          fontWeight: 600,
          boxShadow: 'none',
          transition: theme.transitions.create(['background-color', 'box-shadow', 'border-color', 'color', 'padding'], {
            duration: theme.transitions.duration.short,
          }),
          '&:hover': {
             boxShadow: 'none',
          },
        }),
        containedPrimary: ({ theme }) => ({
             boxShadow: theme.shadows[1],
             '&:hover': {
                 backgroundColor: theme.palette.primary.dark, // Ensure primary.dark exists
                 boxShadow: theme.shadows[2],
             }
        }),
         containedSecondary: ({ theme }) => ({
             boxShadow: theme.shadows[1],
             '&:hover': {
                 backgroundColor: theme.palette.secondary.dark, // Ensure secondary.dark exists
                 boxShadow: theme.shadows[2],
             }
        }),
        outlined: ({ theme }) => ({
             borderWidth: '1.5px',
              ...(theme.palette.mode === 'light' && {
                   color: targetLightTextGrey,
                   borderColor: alpha(targetLightTextGrey, 0.5),
                   '&:hover': {
                       backgroundColor: alpha(targetLightTextGrey, 0.08),
                       borderColor: alpha(targetLightTextGrey, 0.7),
                       borderWidth: '1.5px',
                   }
               }),
               ...(theme.palette.mode === 'dark' && {
                  '&:hover': {
                     backgroundColor: theme.palette.action.hover, // Ensure action.hover exists
                     borderWidth: '1.5px',
                  }
               }),
        }),
        outlinedPrimary: ({ theme }) => ({
             borderWidth: '1.5px',
             ...(theme.palette.mode === 'light' && {
                 '&:hover': {
                     backgroundColor: alpha(theme.palette.primary.main, 0.08),
                     borderWidth: '1.5px',
                 }
             }),
              ...(theme.palette.mode === 'dark' && {
                 '&:hover': {
                     backgroundColor: alpha(theme.palette.primary.main, 0.1),
                     borderWidth: '1.5px',
                 }
              }),
        }),
         outlinedSecondary: ({ theme }) => ({
             borderWidth: '1.5px',
              ...(theme.palette.mode === 'light' && {
                 '&:hover': {
                     backgroundColor: alpha(theme.palette.secondary.main, 0.08),
                     borderWidth: '1.5px',
                 }
             }),
              ...(theme.palette.mode === 'dark' && {
                 '&:hover': {
                     backgroundColor: alpha(theme.palette.secondary.main, 0.1),
                     borderWidth: '1.5px',
                 }
              }),
        }),
         text: ({ theme }) => ({
             ...(theme.palette.mode === 'light' && {
                 color: targetLightTextGrey,
                 '&:hover': {
                     backgroundColor: alpha(targetLightTextGrey, 0.08),
                 }
             }),
             ...(theme.palette.mode === 'dark' && {
                  '&:hover': {
                     backgroundColor: theme.palette.action.hover,
                 }
             }),
         }),
          textPrimary: ({ theme }) => ({
              ...(theme.palette.mode === 'light' && {
                 '&:hover': {
                     backgroundColor: alpha(theme.palette.primary.main, 0.08),
                 }
             }),
              ...(theme.palette.mode === 'dark' && {
                 '&:hover': {
                     backgroundColor: alpha(theme.palette.primary.main, 0.1),
                 }
              }),
         }),
          textSecondary: ({ theme }) => ({
              ...(theme.palette.mode === 'light' && {
                 '&:hover': {
                     backgroundColor: alpha(theme.palette.secondary.main, 0.08),
                 }
             }),
              ...(theme.palette.mode === 'dark' && {
                 '&:hover': {
                     backgroundColor: alpha(theme.palette.secondary.main, 0.1),
                 }
              }),
         }),
         sizeLarge: ({ theme }) => ({
             padding: theme.spacing(1.5, 4),
             fontSize: '1rem',
             height: 'auto',
             borderRadius: theme.shape.borderRadius * 3,
             [theme.breakpoints.down('sm')]: {
                padding: theme.spacing(1.25, 3),
            },
        }),
         sizeSmall: ({ theme }) => ({
             padding: theme.spacing(0.5, 1.5),
             fontSize: '0.8125rem',
        }),
      },
    },
    MuiDivider: {
        styleOverrides: {
            root: ({ theme }) => ({
                marginTop: theme.spacing(2),
                marginBottom: theme.spacing(2),
                borderColor: theme.palette.divider,
            })
        }
    },
    MuiBox: {
      styleOverrides: {
        root: {
          boxSizing: 'border-box',
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          boxSizing: 'border-box',
        },
      },
    },
  },
};

const getTheme = (mode) => {
  return createTheme({
    ...baseThemeOptions,
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            primary: {
              main: primaryColorLight,
              light: blue[400], // Added for completeness
              dark: blue[800],  // Added for completeness
              contrastText: '#ffffff', // Added for completeness
            },
            secondary: {
              main: secondaryColorLight,
              light: teal[300], // Added for completeness
              dark: teal[700], // Added for completeness
              contrastText: '#ffffff', // Added for completeness
            },
            background: { default: backgroundColorDefaultLight, paper: backgroundColorPaperLight },
            text: { primary: textPrimaryLight, secondary: textSecondaryLight, disabled: disabledTextLight },
            divider: dividerColorLight,
            action: { // Added full action object for light mode
              active: primaryColorLight,
              hover: alpha(primaryColorLight, 0.08),
              selected: alpha(primaryColorLight, 0.16),
              disabled: alpha(textPrimaryLight, 0.38),
              disabledBackground: alpha(textPrimaryLight, 0.12),
              focus: alpha(primaryColorLight, 0.12),
            },
          }
        : { // Dark mode
            primary: {
              main: primaryColorDark,
              light: blue[100], // Added for completeness
              dark: blue[400], // Added for completeness
              contrastText: grey[900], // Added for completeness
            },
            secondary: {
              main: secondaryColorDark,
              light: teal[100], // Added for completeness
              dark: teal[400], // Added for completeness
              contrastText: grey[900], // Added for completeness
            },
            background: { default: backgroundColorDefaultDark, paper: backgroundColorPaperDark },
            text: { primary: textPrimaryDark, secondary: textSecondaryDark, disabled: disabledTextDark },
            divider: dividerColorDark,
            action: { // Added full action object for dark mode
              active: primaryColorDark,
              hover: alpha(primaryColorDark, 0.1),
              selected: alpha(primaryColorDark, 0.2),
              disabled: alpha(textPrimaryDark, 0.3),
              disabledBackground: alpha(textPrimaryDark, 0.15),
              focus: alpha(primaryColorDark, 0.15),
            },
          }),
    },
  });
}
export default getTheme;