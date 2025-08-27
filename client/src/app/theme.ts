import { createTheme, responsiveFontSizes } from '@mui/material';

import { INWORLD_COLORS, SLATE, NAVY, BEIGE } from './colors';

export const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: NAVY.main,
        light: NAVY.light,
        dark: NAVY.dark,
      },
      secondary: {
        main: NAVY.light,
        light: NAVY.main,
        dark: NAVY.dark,
      },
      text: {
        primary: NAVY.dark,
        secondary: NAVY.light,
        disabled: '#A9A9A9',
      },
      background: {
        paper: BEIGE.light,
        default: BEIGE.main,
      },
      grey: {
        '100': SLATE[100],
      },
    },
    typography: {
      fontFamily: '"GeneralSans-Variable", "DM Sans", "Arial", sans-serif',
      fontSize: 16,
      fontWeightLight: 300,
      fontWeightRegular: 500,
      fontWeightMedium: 500,
      h1: {
        fontSize: '4.75rem',
        lineHeight: 1,
        fontWeight: 600,
        letterSpacing: '-2px',
      },
      h2: {
        fontSize: '3.5rem',
        lineHeight: 1.14,
        fontWeight: 600,
        letterSpacing: '-2px',
      },
      h3: {
        fontSize: '2rem',
        lineHeight: 1.25,
        fontWeight: 600,
        letterSpacing: '-1px',
      },
      h4: {
        fontSize: '1.25rem',
        lineHeight: 1.4,
        fontWeight: 600,
        letterSpacing: '-1px',
      },
      h5: {
        fontSize: '1rem',
        lineHeight: 1.4,
        fontWeight: 600,
      },
      h6: {
        fontSize: '0.875rem',
        lineHeight: 1.4,
        fontWeight: 600,
      },
      button: {
        letterSpacing: '0',
        textTransform: 'none',
      },
      body1: {
        fontSize: '1rem',
      },
      body2: {
        fontSize: '0.875rem',
      },
      caption: {
        fontSize: '0.75rem',
      },
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            border: 'none',
            borderBottom: `solid 1px ${INWORLD_COLORS.warmGray[20]}`,
            boxShadow: 'none',
            backgroundColor: 'rgba(255,255,255,0.8)',
            backdropFilter: 'blur(16px)',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          sizeSmall: {
            minHeight: '2rem',
          },
          sizeMedium: {
            minHeight: '2.5rem',
          },
          sizeLarge: {
            minHeight: '3rem',
          },
          root: {
            fontFamily: 'DM Sans',
            fontSize: '0.875rem',
            textTransform: 'none',
            borderRadius: 32,
            boxShadow: 'none',
            letterSpacing: 0,
          },
        },
      },
      MuiCard: {
        defaultProps: {
          variant: 'outlined',
        },
        styleOverrides: {
          root: {
            borderRadius: '0.75rem',
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            fontFamily: 'DM Sans',
          },
        },
      },
      MuiOutlinedInput: {
        defaultProps: {
          size: 'medium',
        },
        styleOverrides: {
          root: {
            fontFamily: 'DM Sans',
            fontWeight: '400',

            '& .MuiOutlinedInput-notchedOutline': {
              border: `solid 1px ${INWORLD_COLORS.warmGray[20]}`,
              fontWeight: '400',
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            border: `solid 1px ${INWORLD_COLORS.warmGray[20]}`,
          },
        },
      },
    },
  }),
);

export type AppTheme = typeof theme;

export default theme;
