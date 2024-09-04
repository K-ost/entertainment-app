import { GlobalStyles } from "@mui/material";

const MainStyles = () => {
  return (
    <GlobalStyles
      styles={(theme) => ({
        "*": {
          boxSizing: "border-box",
        },
        body: {
          background: theme.palette.background.default,
          color: theme.palette.common.white,
          fontSize: "15px",
          fontFamily: "'Outfit', sans-serif",
          fontWeight: 300,
          lineHeight: "20px",
          margin: 0,
        },
        a: {
          color: theme.palette.error.main,
          textDecoration: "none",
          "&:hover": {
            textDecoration: "underline",
          },
        },
      })}
    />
  );
};

export default MainStyles;
