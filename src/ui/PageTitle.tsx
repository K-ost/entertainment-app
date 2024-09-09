import { Box, Typography } from "@mui/material";

type PageTitleProps = {
  children?: React.ReactNode;
  title: string;
};

const PageTitle = (props: PageTitleProps): JSX.Element => {
  const { children, title } = props;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "20px",
      }}
    >
      <Typography variant="h1" sx={{ margin: 0 }}>
        {title}
      </Typography>
      {children}
    </Box>
  );
};

export default PageTitle;
