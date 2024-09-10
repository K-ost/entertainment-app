import { Typography } from "@mui/material";
import { Comment } from "../../types";
import CommentForm from "./CommentForm";
import useQueryData from "../../hooks/useQueryData";
import CommentItem from "./CommentItem";

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
    uri: `/comments?movieId=${movieId}`,
  });

  return (
    <div>
      <Typography variant="h3">
        Comments {isSuccess && comments.length && `(${comments.length})`}
      </Typography>

      {isLoading && (
        <Typography variant="body1" sx={{ mb: 4 }}>
          Loading...
        </Typography>
      )}

      {isSuccess &&
        comments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
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
