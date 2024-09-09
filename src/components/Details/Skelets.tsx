import { Box, Grid } from "@mui/material";
import useMediaTools from "../../hooks/useMediaTools";
import Skelet from "../../ui/Skelet";

const DetailsSkelets = (): JSX.Element => {
  const { isMobile } = useMediaTools();

  return (
    <Box data-testid="detailsSkeletes">
      <Skelet height={40} margin={20} />
      <Grid container spacing={isMobile ? 2 : 4} sx={{ mb: 4 }}>
        <Grid xs={12} lg={6} item>
          <Skelet height={240} />
        </Grid>
        <Grid xs={12} lg={6} item>
          <Skelet height={30} margin={20} />
          <Skelet height={30} margin={20} />
          <Skelet height={30} margin={20} />
          <Skelet height={30} margin={20} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DetailsSkelets;
