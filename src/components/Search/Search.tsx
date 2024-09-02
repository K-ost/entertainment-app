import { useDebounce } from "../../hooks/useDebounce";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Box, BoxProps, styled, useTheme } from "@mui/material";
import searchIcon from "../../assets/search.svg";
import Input from "../../ui/Input";

// Styles
const SearchContainer = styled(Box)<BoxProps>(({ theme }) => ({
  background: `url(${searchIcon}) 0 13px no-repeat`,
  paddingTop: 0,
  paddingRight: theme.spacing(4),
  paddingBottom: "20px",
  paddingLeft: "56px",
  [theme.breakpoints.down("lg")]: {
    marginLeft: theme.spacing(4),
  },
  [theme.breakpoints.down("sm")]: {
    backgroundPosition: "0 15px",
    backgroundSize: "24px",
    paddingLeft: "40px",
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
      <Input
        type="search"
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
