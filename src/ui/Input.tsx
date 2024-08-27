import styled from "styled-components";

interface IInput {
  error?: string;
  handler: (val: string) => void;
  min?: string;
  placeholder?: string;
  search?: boolean;
  type?: "text" | "email" | "search" | "password" | "number";
}

// Styles
const Div = styled.div<{ $search: boolean }>`
  margin: 0 0 ${(props) => (props.$search ? "0" : "16px")};
  position: relative;
`;
const Error = styled.div`
  color: var(--color-danger);
  margin-top: -10px;
  position: absolute;
  right: 16px;
  top: 50%;
`;
const FormControl = styled.input<{ $error: boolean; $search: boolean }>`
  background: 0;
  border: 0;
  border-radius: 0;
  border-bottom-width: 1px;
  border-style: solid;
  border-color: ${({ $error, $search }) =>
    $search
      ? "transparent"
      : $error
      ? "var(--color-danger)"
      : "var(--color-greyish)"};
  color: var(--color-white);
  font-family: var(--ff);
  font-size: ${(props) => (props.$search ? "24px" : "var(--fs)")};
  font-weight: 300;
  height: 54px;
  line-height: 32px;
  margin: 0;
  outline: none;
  padding: 14px ${(props) => (props.$search ? "0" : "16px")};
  width: 100%;
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
  &:focus {
    border-color: var(
      --color-${(props) => (props.$search ? "greyish" : "white")}
    );
  }
  @media screen and (max-width: 750px) {
    font-size: 16px;
  }
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }
`;

const Input: React.FC<IInput> = ({
  error,
  handler,
  min,
  placeholder,
  search = false,
  type = "text",
}) => {
  return (
    <Div $search={search}>
      <FormControl
        $error={!!error}
        type={type}
        placeholder={placeholder}
        $search={search}
        min={min}
        className={search ? "searchInput" : undefined}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handler(e.target.value)
        }
      />
      {!!error && !search && <Error>{error}</Error>}
    </Div>
  );
};

export default Input;
