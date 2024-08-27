import { FormControl, MenuItem, TextField } from "@mui/material";

export type SelectBoxItemType = {
  value: string;
  name: string;
};

interface ISelectBox {
  handler: React.Dispatch<React.SetStateAction<string>>;
  value: string;
  list: SelectBoxItemType[];
}

const SelectBox: React.FC<ISelectBox> = ({ handler, list, value }) => {
  return (
    <FormControl size="small">
      <TextField
        value={value}
        select
        onChange={(e) => handler(e.target.value)}
        sx={{
          color: "var(--color-white)",
          fontSize: "var(--fs)",
          fontFamily: "var(--ff)",
          fontWeight: 300,
          ".MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--color-greyish) !important",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderWidth: 1,
          },
          "& .MuiSelect-icon": {
            fill: "var(--color-greyish)",
          },
        }}
      >
        {list.map((el, index) => (
          <MenuItem key={index} value={el.value}>
            {el.name}
          </MenuItem>
        ))}
      </TextField>
    </FormControl>
  );
};

export default SelectBox;
