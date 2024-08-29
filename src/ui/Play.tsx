import styled from "styled-components";
import play from "../assets/play.svg";

// Styled
export const PlayOverlay = styled.span`
  background: rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  transition: all 200ms ease-in-out;
  opacity: 0;
  visibility: hidden;
`;
const PlayButton = styled.span`
  background: rgba(255, 255, 255, 0.25) url(${play}) 9px center no-repeat;
  border-radius: 48px;
  display: inline-block;
  font-size: var(--XS);
  line-height: 20px;
  padding: 14px 24px 14px 58px;
`;

const Play = (): JSX.Element => {
  return (
    <PlayOverlay>
      <PlayButton>Play</PlayButton>
    </PlayOverlay>
  );
};

export default Play;
