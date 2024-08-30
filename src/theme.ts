import { createTheme } from "@mui/material";

export const customTheme = createTheme({
  palette: {
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
  },
});
