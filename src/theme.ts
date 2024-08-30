import { createTheme } from "@mui/material";

export const customTheme = createTheme({
  palette: {
    background: {
      default: "#10141e",
      paper: "#161d2f",
    },
    primary: {
      main: "#ffffff",
      contrastText: "#000000",
    },
    error: {
      main: "#fc4747",
    },
  },
  typography: {
    fontFamily: "'Outfit', sans-serif",
    fontSize: 15,
    body1: {
      fontSize: 15,
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
});
