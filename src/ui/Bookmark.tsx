import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import icon from "../assets/bookmark.svg";
import iconHover from "../assets/bookmark-hover.svg";
import iconActive from "../assets/bookmark-active.svg";
import iconHoverActive from "../assets/bookmark-hover-active.svg";
import { useAuthStore } from "../store/useAuthStore";

type BookmarkProps = {
  active: boolean;
  id: string;
};

// Styles
const Button = styled.button<{ $active: boolean }>`
  background: rgba(0, 0, 0, 0.5)
    url(${(props) => (props.$active ? iconActive : icon)}) center no-repeat;
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
    background-image: url(${(props) =>
      props.$active ? iconHoverActive : iconHover});
  }
  &:disabled {
    cursor: default;
    opacity: 0.5;
    &:hover {
      background: rgba(0, 0, 0, 0.5)
        url(${(props) => (props.$active ? iconActive : icon)}) center no-repeat;
    }
  }
`;

const Bookmark = (props: BookmarkProps): JSX.Element => {
  const { active, id } = props;
  const { auth } = useAuthStore();
  const navigate = useNavigate();

  const addBookmark = () => {
    if (!auth) {
      return navigate("/login");
    }
    console.log("Added");
  };

  return <Button $active={active} onClick={addBookmark} />;
};

export default Bookmark;
