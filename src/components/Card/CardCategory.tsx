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
        paddingLeft: "18px",
        position: "relative",
        "&::before": {
          backgroundImage: `url(${category === "Movie" ? movieIcon : tvIcon})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          content: '""',
          display: "block",
          height: "12px",
          marginTop: "-6px",
          left: 0,
          top: "50%",
          position: "absolute;",
          width: "12px",
        },
      }}
    >
      {category}
    </MetaItem>
  );
};

export default CardCategory;
