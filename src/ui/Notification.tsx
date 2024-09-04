import {
  Snackbar,
  SnackbarContent,
  SnackbarProps,
  useTheme,
} from "@mui/material";
import { useAppStore } from "../store/useAppStore";

type NotificationProps = {
  message: string;
};

const Notification = (
  props: SnackbarProps & NotificationProps
): JSX.Element => {
  const { message } = props;
  const { setMessage } = useAppStore();
  const theme = useTheme();

  return (
    <Snackbar
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      autoHideDuration={3000}
      onClose={() => setMessage("")}
      {...props}
    >
      <SnackbarContent
        style={{
          background: theme.palette.primary.main,
          color: theme.palette.common.white,
        }}
        message={message}
      />
    </Snackbar>
  );
};

export default Notification;
