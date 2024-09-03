import { FormControl, MenuItem, TextField, useTheme } from "@mui/material";

export type SelectBoxItemType = {
  value: string;
  name: string;
};

type SelectBoxProps = {
  handler: React.Dispatch<React.SetStateAction<string>>;
  value: string;
  list: SelectBoxItemType[];
};

const SelectBox = (props: SelectBoxProps): JSX.Element => {
  const { handler, list, value } = props;
  const theme = useTheme();

  return (
    <FormControl size="small">
      <TextField
        value={value}
        select
        onChange={(e) => handler(e.target.value)}
        variant="outlined"
        sx={{
          "& .MuiInputBase-root": {
            borderWidth: 1,
            borderStyle: "solid",
            borderRadius: "6px",
            boxShadow: "none",
            borderColor: theme.palette.common.white,
            color: theme.palette.common.white,
            height: "50px",
          },
          "& .MuiSelect-outlined": {
            boxShadow: "none",
          },
          "& .MuiInputBase-input": {
            borderWidth: 0,
            boxShadow: "none",
            paddingRight: "40px !important",
          },
          "& .MuiSelect-iconOutlined": {
            fill: theme.palette.common.white,
          },
          "& .MuiOutlinedInput-notchedOutline": {
            border: "0 !important",
          },
        }}
      >
        {list.map((el, index) => (
          <MenuItem
            key={index}
            value={el.value}
            sx={{ color: theme.palette.common.white }}
          >
            {el.name}
          </MenuItem>
        ))}
      </TextField>
    </FormControl>
  );
};

export default SelectBox;
