import { styled, TextField, TextFieldProps } from "@mui/material";
import close from "../assets/close.svg";

const CustomInput = styled(TextField)<TextFieldProps>(({ theme }) => ({
  marginBottom: theme.spacing(2),
  position: "relative",
  "& .MuiInputBase-input": {
    background: 0,
    border: 0,
    boxSizing: "border-box",
    color: theme.palette.common.white,
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.fontSize,
    fontWeight: 300,
    height: "54px",
    lineHeight: "32px",
    padding: "14px 16px",
    "&::-webkit-search-cancel-button": {
      background: `url(${close}) center / 20px no-repeat`,
      cursor: "pointer",
      width: "24px",
      height: "24px",
      WebkitAppearance: "none",
    },
    "&.Mui-disabled": {
      color: theme.palette.text.disabled,
    },
  },
  "& .MuiFormLabel-root": {
    color: theme.palette.text.disabled,
  },
  "& .MuiInputBase-root::before": {
    borderBottomColor: theme.palette.common.white,
    opacity: 0.7,
  },
  "& .MuiInputBase-root::after": {
    borderBottomColor: theme.palette.common.white,
    borderBottomWidth: 1,
  },
  "& .MuiFormHelperText-root": {
    margin: "-10px 0 0",
    position: "absolute",
    right: 0,
    top: "50%",
  },
}));

const Input = (props: TextFieldProps): JSX.Element => {
  return <CustomInput variant="standard" fullWidth {...props} />;
};

export default Input;
