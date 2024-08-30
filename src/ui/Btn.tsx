import { Button, ButtonProps, styled } from "@mui/material";

const CustomButton = styled(Button)<ButtonProps>(({ theme }) => {
  return {
    border: 0,
    borderRadius: "6px",
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.fontSize,
    fontWeight: 400,
    lineHeight: "20px",
    padding: "14px 24px",
    textTransform: "none",
    "&.MuiButton-sizeSmall": {
      padding: "10px 18px",
    },
    "&.MuiButton-sizeLarge": {
      fontSize: "20px",
      padding: "20px 32px",
    },
  };
});

const Btn = (props: ButtonProps): JSX.Element => {
  return <CustomButton {...props} />;
};

export default Btn;
