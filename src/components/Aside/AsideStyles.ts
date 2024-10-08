import { Box, BoxProps, styled } from "@mui/material";

// Styles
export const Sidebar = styled(Box)<BoxProps>(({ theme }) => ({
  background: theme.palette.primary.main,
  borderRadius: 20,
  display: "flex",
  flexDirection: "column",
  margin: theme.spacing(4),
  padding: "32px 12px",
  textAlign: "center",
  minWidth: "96px",
  maxWidth: "96px",
  [theme.breakpoints.down("lg")]: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: theme.spacing(3),
    minWidth: 0,
    marginBottom: 0,
    maxWidth: "none",
    padding: "20px 24px",
  },
  [theme.breakpoints.down("md")]: {
    borderRadius: 0,
    padding: theme.spacing(2),
    margin: 0,
  },
}));

export const Logo = styled(Box)<BoxProps>(({ theme }) => ({
  margin: "0 0 75px",
  "& img": {
    display: "block",
    margin: "0 auto",
    [theme.breakpoints.down("md")]: {
      width: "25px",
    },
  },
  [theme.breakpoints.down("lg")]: {
    margin: "0",
  },
}));

export const AsideUser = styled(Box)<BoxProps>(({ theme }) => ({
  "--size": "40px",
  "& a": {
    borderWith: 1,
    borderStyle: "solid",
    borderColor: theme.palette.common.white,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "calc(var(--size) + 2px)",
    width: "calc(var(--size) + 2px)",
    margin: "0 auto",
  },
  "& img.ava": {
    borderRadius: "50%",
    display: "block",
    height: "var(--size)",
    objectFit: "cover",
    width: "var(--size)",
    padding: 0,
  },
  [theme.breakpoints.down("lg")]: {
    "--size": "32px",
  },
  [theme.breakpoints.down("md")]: {
    "--size": "24px",
  },
}));

export const NavContainer = styled(Box)<BoxProps>(({ theme }) => ({
  marginBottom: "auto",
  [theme.breakpoints.down("lg")]: {
    marginBottom: 0,
  },
  "& ul": {
    margin: 0,
    padding: 0,
    [theme.breakpoints.down("lg")]: {
      display: "flex",
    },
    "& li": {
      listStyle: "none",
      margin: "0 0 40px",
      [theme.breakpoints.down("lg")]: {
        margin: "0 16px",
      },
      [theme.breakpoints.down("md")]: {
        margin: "0 12px",
      },
      "& a svg": {
        display: "block",
        margin: "0 auto",
        [theme.breakpoints.down("md")]: {
          width: "16px",
        },
      },
      "& a path": {
        fill: theme.palette.background.paper,
      },
      "& a.active path": {
        fill: theme.palette.common.white,
      },
    },
  },
}));
