import { Box, Grid } from "@mui/material";
import { Video } from "../../types";
import AlertError from "../AlertError";
import LoadingSkelets from "../LoadingSkelets";
import Card from "./Card";

type CardListProps = {
  data: Video[];
  isLoading: boolean;
  isError: boolean;
};

const CardList = (props: CardListProps): JSX.Element => {
  const { data, isError, isLoading } = props;

  if (isLoading) return <LoadingSkelets />;
  if (isError) return <AlertError />;

  return (
    <div>
      <Grid container spacing={4}>
        {data.map((el) => (
          <Grid item xs={6} sm={4} md={4} lg={3} key={el.id}>
            <Card el={el} type="card" />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CardList;
