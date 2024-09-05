import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { useAuthStore } from "../../store/useAuthStore";
import useMutateData from "../../hooks/useMutateData";
import { Video, VideoViewType } from "../../types";
import Bookmark from "../../ui/Bookmark";
import {
  getImageLink,
  checkBookmark,
  updateBookmarks,
  getStyleCondition,
  bookmarksNotification,
} from "../../utils/utils";
import Play from "../../ui/Play";
import { ImgBox, ItemBookMark, Meta, MetaItem, MetaTop } from "./CardStyles";
import CardCategory from "./CardCategory";
import { useNotificationStore } from "../../store/useNotificationStore";

type CardProps = {
  el: Video;
  type?: VideoViewType;
};

const Card = (props: CardProps): JSX.Element => {
  const { el, type = "card" } = props;
  const { auth, updateAuth } = useAuthStore();
  const { setMessage } = useNotificationStore();
  const navigate = useNavigate();
  const isBookmarked = auth ? checkBookmark(el.id, auth.user.bookmarks) : false;
  const isSlide = getStyleCondition(type === "trend");

  const { mutate } = useMutateData<{ bookmarks: string[] }>({
    key: ["user"],
    method: "PATCH",
    uri: `/users/${auth?.user.id}`,
  });

  const addToBookmarks = () => {
    if (!auth) {
      return navigate("/login");
    }
    const bookmarks = updateBookmarks(isBookmarked, auth.user.bookmarks, el.id);
    mutate({ bookmarks });
    updateAuth(bookmarks);
    setMessage(bookmarksNotification(el.title, isBookmarked));
  };

  return (
    <Box sx={{ position: "relative" }}>
      <ImgBox slide={isSlide}>
        <img src={getImageLink(el.thumbnail)} alt="" />
        <Play />
      </ImgBox>
      <ItemBookMark>
        <Bookmark
          added={getStyleCondition(isBookmarked)}
          onClick={addToBookmarks}
        />
      </ItemBookMark>
      <Meta slide={isSlide}>
        <MetaTop slide={isSlide}>
          <MetaItem>{el.year}</MetaItem>
          <CardCategory category={el.category} />
          <MetaItem>{el.rating}</MetaItem>
        </MetaTop>
        <Typography variant="h4" sx={{ margin: 0 }}>
          {el.title}
        </Typography>
      </Meta>
    </Box>
  );
};

export default Card;
