import { Button, ButtonProps, styled } from "@mui/material";
import icon from "../assets/bookmark.svg";
import iconHover from "../assets/bookmark-hover.svg";
import iconActive from "../assets/bookmark-active.svg";
import iconHoverActive from "../assets/bookmark-hover-active.svg";

type BookmarkProps = {
  added: boolean;
};

const BookmarkButton = styled(Button)<ButtonProps & { added?: string }>(
  ({ added }) => ({
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundImage: `url(${added ? iconActive : icon})`,
    borderRadius: "50%",
    height: "32px",
    width: "32px",
    minWidth: 0,
    padding: 0,
    "&:hover": {
      backgroundColor: "#fff",
      backgroundImage: `url(${added ? iconHoverActive : iconHover})`,
    },
    "&:disabled": {
      opacity: "0.5",
      "&:hover": {
        background: "rgba(0, 0, 0, 0.5)",
        backgroundImage: `url(${added ? iconActive : icon})`,
      },
    },
  })
);

const Bookmark = (props: ButtonProps & BookmarkProps): JSX.Element => {
  const { added } = props;
  const isAdded = added ? added.toString() : undefined;
  return <BookmarkButton added={isAdded} />;
};

export default Bookmark;
