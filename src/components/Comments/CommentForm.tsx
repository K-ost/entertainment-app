import { useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useAuthStore } from "../../store/useAuthStore";
import Btn from "../../ui/Btn";
import Input from "../../ui/Input";
import { Comment } from "../../types";
import useMutateData from "../../hooks/useMutateData";
import { CircularProgress } from "@mui/material";

type FormComment = Pick<Comment, "description">;

type CommentFormProps = {
  movieId: string;
};

const CommentForm = (props: CommentFormProps): JSX.Element => {
  const { movieId } = props;
  const { auth } = useAuthStore();
  const queryClient = useQueryClient();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormComment>();

  const { mutate, isPending } = useMutateData<Omit<Comment, "id">>({
    key: ["comments"],
    method: "POST",
    uri: "/comments",
  });

  const addCommentHandler = (data: FormComment) => {
    const newComment: Omit<Comment, "id"> = {
      createdAt: new Date(Date.now()),
      description: data.description,
      movieId,
      username: auth?.user.name!,
    };
    mutate(newComment, {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["comments"],
        });
      },
    });
    reset();
  };

  if (!auth) return <></>;

  return (
    <div>
      <form onSubmit={handleSubmit(addCommentHandler)}>
        <Input
          minRows={2}
          maxRows={3}
          multiline
          placeholder="Comment"
          inputProps={{
            ...register("description", {
              required: "Required field",
              minLength: {
                message: "Should have 5 or more characters",
                value: 5,
              },
            }),
          }}
          error={errors.description ? true : false}
          helperText={errors.description?.message}
        />
        <Btn variant="contained" color="error" type="submit">
          Add comment
          {isPending && (
            <CircularProgress size={20} color="secondary" sx={{ ml: 2 }} />
          )}
        </Btn>
      </form>
    </div>
  );
};

export default CommentForm;
