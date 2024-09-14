import { Box, BoxProps, styled, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import useMediaTools from "../hooks/useMediaTools";

type FormWrapperProps = {
  children: React.ReactNode;
  title: string;
};

const Wrapper = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  borderRadius: "20px",
  padding: theme.spacing(4),
  margin: "0 auto",
  maxWidth: "400px",
  width: "100%",
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(3),
    maxWidth: "none",
    width: "auto",
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
  },
}));

const FormWrapper = (props: FormWrapperProps): JSX.Element => {
  const { children, title } = props;
  const theme = useTheme();
  const { isMobile } = useMediaTools();

  return (
    <Box>
      <Box sx={{ padding: isMobile ? "48px 0 58px" : "80px 0" }}>
        <Link to="/" aria-label="Return to Home Page">
          <img
            src={logo}
            alt=""
            style={{ display: "block", margin: "0 auto" }}
          />
        </Link>
      </Box>
      <Wrapper>
        <Typography variant="h1" sx={{ marginBottom: theme.spacing(3) }}>
          {title}
        </Typography>
        {children}
      </Wrapper>
    </Box>
  );
};

export default FormWrapper;
