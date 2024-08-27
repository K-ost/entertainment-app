import styled from "styled-components"
import icon from "../assets/bookmark.svg"
import iconHover from "../assets/bookmark-hover.svg"
import iconActive from "../assets/bookmark-active.svg"
import iconHoverActive from "../assets/bookmark-hover-active.svg"

interface IBookmark {
  active: boolean
  disabled: boolean
  handler: () => void
}

// Styles
const Button = styled.button<{ $active: boolean }>`
  background: rgba(0,0,0,0.5) url(${props => props.$active ? iconActive : icon}) center no-repeat;
  border: 0;
  border-radius: 50%;
  cursor: pointer;
  display: block;
  height: 32px;
  margin: 0;
  padding: 0;
  width: 32px;
  &:hover {
    background-color: var(--color-white);
    background-image: url(${props => props.$active ? iconHoverActive : iconHover});
  }
  &:disabled {
    cursor: default;
    opacity: 0.5;
    &:hover {
      background: rgba(0,0,0,0.5) url(${props => props.$active ? iconActive : icon}) center no-repeat;
    }
  }
`

const Bookmark: React.FC<IBookmark> = ({ active, disabled, handler }) => {
  return <Button $active={active} onClick={handler} disabled={disabled} />
}

export default Bookmark
