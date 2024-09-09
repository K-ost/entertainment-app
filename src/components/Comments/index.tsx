import { Box, Typography } from "@mui/material";
import { Comment } from "../../types";
import CommentForm from "./CommentForm";
import useQueryData from "../../hooks/useQueryData";

type CommentsListProps = {
  movieId: string;
};

const CommentsList = (props: CommentsListProps): JSX.Element => {
  const { movieId } = props;

  const {
    data: comments,
    isLoading,
    isSuccess,
  } = useQueryData<Comment[]>({
    key: ["comments"],
    uri: "/comments",
  });

  return (
    <div>
      <Typography variant="h3">Comments</Typography>

      {isLoading && (
        <Typography variant="body1" sx={{ mb: 4 }}>
          Loading...
        </Typography>
      )}

      {isSuccess &&
        comments.map((comment) => (
          <Box key={comment.id}>
            <p>{comment.username}</p>
            <p>{comment.description}</p>
          </Box>
        ))}

      {isSuccess && !comments.length && (
        <Typography variant="body1" sx={{ mb: 4 }}>
          No comments yet.
        </Typography>
      )}

      <CommentForm movieId={movieId} />
    </div>
  );
};

export default CommentsList;
