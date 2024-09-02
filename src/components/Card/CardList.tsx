import { Grid } from "@mui/material";
import { Video } from "../../types";
import AlertError from "../AlertError";
import LoadingSkelets from "../LoadingSkelets";
import Card from "./Card";
import useMediaTools from "../../hooks/useMediaTools";

type CardListProps = {
  data: Video[];
  isLoading: boolean;
  isError: boolean;
};

const CardList = (props: CardListProps): JSX.Element => {
  const { data, isError, isLoading } = props;
  const { isMobile } = useMediaTools();

  if (isLoading) return <LoadingSkelets />;
  if (isError) return <AlertError />;

  return (
    <div>
      <Grid container spacing={isMobile ? 2 : 4}>
        {data.map((el) => (
          <Grid item xs={6} sm={6} md={4} lg={3} key={el.id}>
            <Card el={el} type="card" />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CardList;
