import { Snackbar, SnackbarContent } from "@mui/material";

type ToastProps = {
  close?: () => void;
  message: string;
  show: boolean;
};

const Toast = (props: ToastProps): JSX.Element => {
  const { message, show, close } = props;

  return (
    <Snackbar
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      autoHideDuration={5000}
      open={show}
      onClose={close}
    >
      <SnackbarContent
        style={{
          background: "var(--color-semi-dark)",
          color: "var(--color-white)",
        }}
        message={message}
      />
    </Snackbar>
  );
};

export default Toast;
