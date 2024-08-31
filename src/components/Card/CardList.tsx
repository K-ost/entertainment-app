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
    <div className="grid grid-4 grid-tb-3 grid-mb-2">
      {data.map((el) => (
        <Card key={el.id} el={el} type="card" />
      ))}
    </div>
  );
};

export default CardList;
