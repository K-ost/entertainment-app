import { Box, BoxProps, styled, Typography, useTheme } from "@mui/material";
import { Comment } from "../../types";
import { createDate } from "../../utils/utils";

type CommentItemProps = {
  comment: Comment;
};

// styles
const CommentBox = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: 8,
  marginBottom: theme.spacing(2),
  padding: `${theme.spacing(2)} ${theme.spacing(3)}`,
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

  return (
    <CommentBox>
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
      </Box>
      <Typography variant="body1" fontWeight={400}>
        {comment.description}
      </Typography>
    </CommentBox>
  );
};

export default CommentItem;
