import { Box, Typography, useTheme } from "@mui/material";
import SelectBox, { SelectBoxItemType } from "../ui/SelectBox";

type SortingProps = {
  setSort: React.Dispatch<React.SetStateAction<string>>;
  value: string;
};

const sortList: SelectBoxItemType[] = [
  { name: "Default", value: "default" },
  { name: "Title [A-Z]", value: "title-asc" },
  { name: "Title [Z-A]", value: "title-desc" },
  { name: "New ones first", value: "year-desc" },
  { name: "Old ones first", value: "year-asc" },
];

const Sorting = (props: SortingProps): JSX.Element => {
  const { setSort, value } = props;
  const theme = useTheme();

  return (
    <Box sx={{ alignItems: "center", display: "flex" }}>
      <Typography variant="body1" sx={{ marginRight: theme.spacing(2) }}>
        Sort by
      </Typography>
      <SelectBox handler={setSort} list={sortList} value={value} />
    </Box>
  );
};

export default Sorting;
