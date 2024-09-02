import { BoxProps, Button, styled } from "@mui/material";
import play from "../assets/play.svg";

// Styled
export const PlayButton = styled(Button)<BoxProps>(() => ({
  backgroundColor: "rgba(255, 255, 255, 0.25)",
  backgroundImage: `url(${play})`,
  backgroundPosition: "9px center",
  backgroundRepeat: "no-repeat",
  borderRadius: "48px",
  content: '"Play"',
  display: "none",
  fontSize: "var(--XS)",
  fontWeight: 300,
  lineHeight: "20px",
  padding: "14px 24px 14px 58px",
  textTransform: "none",
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%,-50%)",
  zIndex: 5,
}));

const Play = (): JSX.Element => {
  return <PlayButton className="playBtn">Play</PlayButton>;
};

export default Play;
