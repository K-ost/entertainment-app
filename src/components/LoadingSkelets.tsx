import { Grid } from "@mui/material";
import Skelet from "../ui/Skelet";

type LoadingSkeletsProps = {
  number?: number;
  slider?: boolean;
};

const LoadingSkelets = (props: LoadingSkeletsProps): JSX.Element => {
  const { number = 16, slider } = props;

  return (
    <div>
      {slider ? (
        <Skelet margin={40} height={180} />
      ) : (
        <Grid container spacing={4} data-testid="loadingSkelets">
          {[...Array(number)].map((__: null, index: number) => (
            <Grid item xs={6} sm={4} md={4} lg={3} key={index}>
              <Skelet height={140} margin={10} />
              <Skelet height={16} margin={10} short={140} />
              <Skelet height={20} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default LoadingSkelets;
