import { Box, BoxProps, styled } from "@mui/material";

// Styles
export const ItemBookMark = styled(Box)<BoxProps>(({ theme }) => ({
  "--pd": "16px",
  position: "absolute",
  right: "var(--pd)",
  top: "var(--pd)",
  [theme.breakpoints.down("md")]: {
    "--pd": "16px",
  },
}));

export const ImgBox = styled(Box)<BoxProps & { slide?: string }>(
  ({ theme, slide }) => ({
    margin: "0 0 8px",
    position: "relative",
    "& img": {
      borderRadius: "8px",
      display: "block",
      height: slide ? "230px" : "174px",
      objectFit: "cover",
      width: "100%",
      [theme.breakpoints.down("lg")]: {
        height: slide ? "230px" : "140px",
      },
      [theme.breakpoints.down("md")]: {
        height: slide ? "140px" : "110px",
      },
    },
    "&::after": {
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      borderRadius: "8px",
      content: '""',
      display: "flex",
      justifyContent: "center",
      position: "absolute",
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      transition: "all 200ms ease-in-out",
      opacity: 0,
      visibility: "hidden",
      zIndex: 2,
    },
    "&:hover::after": {
      opacity: 1,
      visibility: "visible",
    },
    "&:hover .playBtn": {
      display: "block",
    },
  })
);

export const Meta = styled(Box)<BoxProps & { slide?: string }>(
  ({ theme, slide }) => ({
    "--pad": "24px",
    position: slide ? "absolute" : "relative",
    left: slide ? "var(--pad)" : "auto",
    bottom: slide ? "var(--pad)" : "auto",
    right: slide ? "var(--pad)" : "auto",
    "& h4": {
      fontSize: `var(--${slide ? "M" : "XS"})`,
    },
    [theme.breakpoints.down("md")]: {
      "--pad": "16px",
    },
  })
);

export const MetaTop = styled(Box)<BoxProps & { slide?: string }>(
  ({ slide }) => ({
    color: "rgba(255, 255, 255, 0.75)",
    display: "flex",
    fontSize: `var(--${slide ? "fs" : "BS"})`,
    margin: "0 0 5px",
  })
);

export const MetaItem = styled(Box)<BoxProps & { slide?: string }>(() => ({
  marginRight: "8px",
  paddingRight: "11px",
  position: "relative",
  "&::after": {
    background: "rgba(255, 255, 255, 0.75)",
    borderRadius: "3px",
    content: '""',
    display: "block",
    position: "absolute",
    right: 0,
    height: "3px",
    width: "3px",
    top: "50%",
    marginTop: "-1px",
  },
  "&:last-child": {
    margin: 0,
    padding: 0,
    "&::after": {
      content: "none",
      display: "none",
    },
  },
}));
