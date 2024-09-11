import { VideoCategory } from "../../types";
import { MetaItem } from "./CardStyles";
import movieIcon from "../../assets/movie.svg";
import tvIcon from "../../assets/tv.svg";

type CardCategoryProps = {
  category: VideoCategory;
};

const CardCategory = (props: CardCategoryProps): JSX.Element => {
  const { category } = props;

  return (
    <MetaItem
      sx={{
        alignItems: "center",
        display: "flex",
        position: "relative",
      }}
    >
      <img
        src={category === "Movie" ? movieIcon : tvIcon}
        alt=""
        style={{ display: "block", marginRight: 6 }}
      />
      {category}
    </MetaItem>
  );
};

export default CardCategory;
