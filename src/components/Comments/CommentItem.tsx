import { Box, BoxProps, styled, Typography, useTheme } from "@mui/material";
import { Comment } from "../../types";
import { createDate } from "../../utils/utils";
import Btn from "../../ui/Btn";
import useMutateData from "../../hooks/useMutateData";
import { useQueryClient } from "@tanstack/react-query";
import { useAuthStore } from "../../store/useAuthStore";
import { useNotificationStore } from "../../store/useNotificationStore";

type CommentItemProps = {
  comment: Comment;
};

// styles
const CommentBox = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: 8,
  marginBottom: theme.spacing(2),
  padding: `${theme.spacing(2)} ${theme.spacing(3)}`,
  position: "relative",
}));

const CommentDate = styled(Box)<BoxProps>(({ theme }) => ({
  borderLeftWidth: 1,
  borderLeftColor: theme.palette.text.disabled,
  borderLeftStyle: "solid",
  marginLeft: theme.spacing(2),
  paddingLeft: theme.spacing(2),
}));

const CommentItem = (props: CommentItemProps): JSX.Element => {
  const { comment } = props;
  const theme = useTheme();
  const { auth } = useAuthStore();
  const { setMessage } = useNotificationStore();
  const queryClient = useQueryClient();

  const { mutate } = useMutateData({
    key: ["comments"],
    method: "DELETE",
    uri: `/comments/${comment.id}`,
  });

  queryClient.invalidateQueries({
    queryKey: ["comments"],
  });

  const removeHandler = () => {
    mutate(undefined);
    setMessage("Comment has been removed");
  };

  return (
    <CommentBox data-testid={`commentTest-${comment.id}`}>
      <Box display="flex" alignItems="center" sx={{ mb: 1 }}>
        <Typography variant="body1" color={theme.palette.text.disabled}>
          {comment.username}
        </Typography>
        <CommentDate>
          <Typography
            variant="body1"
            lineHeight="14px"
            color={theme.palette.text.disabled}
          >
            {createDate(comment.createdAt, true)}
          </Typography>
        </CommentDate>
        {auth?.user.role === "admin" && (
          <Btn
            variant="contained"
            color="error"
            sx={{
              padding: 0,
              height: "30px",
              width: "30px",
              minWidth: 0,
              position: "absolute",
              right: theme.spacing(1),
              top: theme.spacing(1),
            }}
            onClick={removeHandler}
            data-testid={`removeComment-${comment.id}`}
          >
            &times;
          </Btn>
        )}
      </Box>
      <Typography variant="body1" fontWeight={400}>
        {comment.description}
      </Typography>
    </CommentBox>
  );
};

export default CommentItem;
