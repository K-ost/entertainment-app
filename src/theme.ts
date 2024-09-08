import { createTheme } from "@mui/material";

export const customTheme = createTheme({
  breakpoints: {
    values: {
      xl: 1400,
      lg: 1020,
      md: 750,
      sm: 540,
      xs: 0,
    },
  },
  palette: {
    background: {
      default: "#10141e",
      paper: "#5a698f",
    },
    primary: {
      main: "#161d2f",
    },
    secondary: {
      main: "#e1e1e1",
    },
    warning: {
      main: "#ffc107",
    },
    error: {
      main: "#fc4747",
    },
    common: {
      white: "#ffffff",
    },
    text: {
      disabled: "rgba(255,255,255,0.5)",
    },
  },
  typography: {
    fontFamily: "'Outfit', sans-serif",
    fontSize: 15,
    body1: {
      fontSize: 15,
    },
    body2: {
      fontSize: 18,
    },
    h1: {
      fontSize: 32,
      fontWeight: 300,
      lineHeight: "38px",
      margin: "0 0 38px",
    },
    h2: {
      fontSize: 32,
      fontWeight: 300,
      lineHeight: "38px",
      margin: "0 0 38px",
    },
    h3: {
      fontSize: 24,
      fontWeight: 400,
      lineHeight: "30px",
      margin: "0 0 32px",
    },
    h4: {
      fontSize: 18,
      fontWeight: 400,
      lineHeight: "24px",
      margin: "0 0 32px",
    },
  },
  spacing: 8,
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: "#5a698f",
          fontSize: 15,
          fontWeight: 300,
        },
      },
    },
  },
});
