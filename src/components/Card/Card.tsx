import { Video, VideoViewType } from "../../types";
import Bookmark from "../../ui/Bookmark";
import { getImageLink } from "../../utils/utils";
import Play from "../../ui/Play";
import {
  ImgBox,
  Item,
  ItemBookMark,
  Meta,
  MetaItem,
  MetaTop,
} from "./CardStyles";

interface ICard {
  el: Video;
  type?: VideoViewType;
}

const Card: React.FC<ICard> = ({ el, type = "card" }) => {
  return (
    <Item>
      <ImgBox $slide={type === "trend"}>
        <img src={getImageLink(el.thumbnail)} alt="" />
        <Play />
      </ImgBox>
      <ItemBookMark>
        <Bookmark active={false} handler={() => {}} disabled={false} />
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
        <h4>{el.title}</h4>
      </Meta>
    </Item>
  );
};

export default Card;
