import { BoxProps, Button, ButtonProps, styled } from "@mui/material";
import play from "../assets/play.svg";

// Styled
export const PlayButton = styled(Button)<ButtonProps>(({ theme }) => ({
  backgroundColor: "rgba(255, 255, 255, 0.25)",
  backgroundImage: `url(${play})`,
  backgroundPosition: "9px center",
  backgroundRepeat: "no-repeat",
  borderRadius: "48px",
  content: '"Play"',
  color: theme.palette.common.white,
  display: "none",
  fontSize: theme.typography.fontSize,
  fontWeight: 300,
  lineHeight: "20px",
  padding: "14px 24px 14px 58px",
  textTransform: "none",
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%,-50%)",
  zIndex: 5,
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
  },
}));

const Play = (props: ButtonProps): JSX.Element => {
  return (
    <PlayButton className="playBtn" {...props}>
      Play
    </PlayButton>
  );
};

export default Play;
