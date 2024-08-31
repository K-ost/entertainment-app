import { Video, VideoViewType } from "../../types";
import Bookmark from "../../ui/Bookmark";
import {
  getImageLink,
  checkBookmark,
  updateBookmarks,
} from "../../utils/utils";
import Play from "../../ui/Play";
import {
  ImgBox,
  Item,
  ItemBookMark,
  Meta,
  MetaItem,
  MetaTop,
} from "./CardStyles";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/useAuthStore";
import useMutateData from "../../hooks/useMutateData";

type CardProps = {
  el: Video;
  type?: VideoViewType;
};

const Card = (props: CardProps): JSX.Element => {
  const { el, type = "card" } = props;
  const { auth, updateAuth } = useAuthStore();
  const navigate = useNavigate();
  const isBookmarked = auth ? checkBookmark(el.id, auth.user.bookmarks) : false;

  const { mutate } = useMutateData<{ bookmarks: string[] }>({
    key: ["user"],
    method: "PATCH",
    uri: `/users/${auth?.user.id}`,
  });

  const addToBookmarks = () => {
    if (!auth?.accessToken) {
      return navigate("/login");
    }
    const bookmarks = updateBookmarks(isBookmarked, auth.user.bookmarks, el.id);
    mutate({ bookmarks });
    updateAuth(bookmarks);
  };

  return (
    <Item>
      <ImgBox $slide={type === "trend"}>
        <img src={getImageLink(el.thumbnail)} alt="" />
        <Play />
      </ImgBox>
      <ItemBookMark>
        <Bookmark added={isBookmarked} onClick={addToBookmarks} />
      </ItemBookMark>
      <Meta $slide={type === "trend"}>
        <MetaTop $slide={type === "trend"}>
          <MetaItem>{el.year}</MetaItem>
          <MetaItem
            className={`metaCategory ${
              el.category === "Movie" ? "movie" : "tv"
            }`}
          >
            {el.category}
          </MetaItem>
          <MetaItem>{el.rating}</MetaItem>
        </MetaTop>
        <Typography variant="h4">{el.title}</Typography>
      </Meta>
    </Item>
  );
};

export default Card;
