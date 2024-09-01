import { Box, BoxProps, styled } from "@mui/material";
import play from "../assets/play.svg";

// Styled
export const PlayOverlay = styled(Box)<BoxProps>(() => ({
  background: "rgba(0, 0, 0, 0.5)",
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  transition: "all 200ms ease-in-out",
  opacity: 0,
  visibility: "hidden",
}));

export const PlayButton = styled(Box)<BoxProps>(() => ({
  background: `rgba(255, 255, 255, 0.25) url(${play}) 9px center no-repeat`,
  borderRadius: "48px",
  display: "inline-block",
  fontSize: "var(--XS)",
  lineHeight: "20px",
  padding: "14px 24px 14px 58px",
}));

const Play = (): JSX.Element => {
  return (
    <PlayOverlay>
      <PlayButton>Play</PlayButton>
    </PlayOverlay>
  );
};

export default Play;
