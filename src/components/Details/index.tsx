import { Box, Chip, Grid, Typography } from "@mui/material";
import { Video } from "../../types";
import useMediaTools from "../../hooks/useMediaTools";

type DetailsProps = {
  data: Video;
};

const Details = (props: DetailsProps): JSX.Element => {
  const { data } = props;
  const { isMobile } = useMediaTools();

  return (
    <Box>
      <Grid container spacing={isMobile ? 2 : 4} sx={{ mb: 4 }}>
        <Grid xs={12} lg={6} item>
          <img
            src={data.thumbnail}
            alt=""
            style={{ maxWidth: "100%", display: "block", borderRadius: 6 }}
          />
        </Grid>
        <Grid xs={12} lg={6} item>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Year: {data.year}
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Category: {data.category}
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Rating: {data.rating}
          </Typography>
          {data.isTrending && (
            <Chip
              variant="filled"
              color="error"
              label="Trend"
              sx={{ fontWeight: 500 }}
            />
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Details;
