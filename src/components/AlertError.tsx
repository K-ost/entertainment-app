import { Alert } from "@mui/material";

type AlertErrorProps = {
  title?: string;
};

const AlertError = (props: AlertErrorProps): JSX.Element => {
  const { title = "Server error" } = props;
  return (
    <Alert color="error" sx={{ mb: "20px" }}>
      {title}
    </Alert>
  );
};

export default AlertError;
