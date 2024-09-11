import { useDebounce } from "../../hooks/useDebounce";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Box, BoxProps, styled, useTheme } from "@mui/material";
import searchIcon from "../../assets/search.svg";
import Input from "../../ui/Input";

// Styles
const SearchContainer = styled(Box)<BoxProps>(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  paddingTop: 0,
  paddingRight: theme.spacing(4),
  [theme.breakpoints.down("lg")]: {
    marginLeft: theme.spacing(4),
  },
  [theme.breakpoints.down("md")]: {
    backgroundPosition: "0 15px",
    backgroundSize: "24px",
    paddingRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
}));

const Search = (): JSX.Element => {
  let [_, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const theme = useTheme();

  const handleSearch = useDebounce((term) => {
    setSearchParams({ q: term });
    navigate(`/search?q=${term}`);
  }, 500);

  return (
    <SearchContainer>
      <img
        src={searchIcon}
        alt=""
        style={{ display: "block", marginRight: theme.spacing(2) }}
      />
      <Input
        type="text"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleSearch(e.target.value)
        }
        placeholder="Search for movies or TV series"
        sx={{
          "& .MuiInputBase-input": {
            fontSize: "24px",
            paddingLeft: 0,
            paddingRight: 0,
            [theme.breakpoints.down("md")]: {
              fontSize: "16px",
            },
          },
          "& .MuiInputBase-root::before": {
            borderBottomColor: "#5a698f",
          },
        }}
      />
    </SearchContainer>
  );
};

export default Search;
