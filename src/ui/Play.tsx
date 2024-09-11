import { Button, ButtonProps, styled } from "@mui/material";
import icon from "../assets/play.svg";

// Styled
export const PlayButton = styled(Button)<ButtonProps>(({ theme }) => ({
  backgroundColor: "rgba(255, 255, 255, 0.25)",
  borderRadius: "48px",
  color: theme.palette.common.white,
  display: "flex !important",
  fontSize: theme.typography.fontSize,
  fontWeight: 300,
  lineHeight: "20px",
  padding: "8px 24px 8px 8px",
  textTransform: "none",
  position: "absolute",
  left: "50%",
  top: "50%",
  height: "48px",
  transform: "translate(-50%,-50%)",
  zIndex: 5,
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
  },
}));

const Play = (props: ButtonProps): JSX.Element => {
  return (
    <PlayButton className="playBtn" {...props}>
      <img
        src={icon}
        alt=""
        style={{
          display: "block",
          marginRight: "16px",
          width: "30px",
          height: "30px",
        }}
      />
      Play
    </PlayButton>
  );
};

export default Play;
