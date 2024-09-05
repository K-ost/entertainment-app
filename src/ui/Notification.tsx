import {
  Snackbar,
  SnackbarContent,
  SnackbarProps,
  useTheme,
} from "@mui/material";
import { useNotificationStore } from "../store/useNotificationStore";

type NotificationProps = {
  message: string;
};

const Notification = (
  props: SnackbarProps & NotificationProps
): JSX.Element => {
  const { message } = props;
  const { setMessage } = useNotificationStore();
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
          background: theme.palette.background.paper,
          color: theme.palette.common.white,
        }}
        message={message}
      />
    </Snackbar>
  );
};

export default Notification;
