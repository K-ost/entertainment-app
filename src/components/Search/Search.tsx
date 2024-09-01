import Input from "../../ui/Input";
import { useDebounce } from "../../hooks/useDebounce";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Box, BoxProps, styled } from "@mui/material";
import searchIcon from "../../assets/search.svg";

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

  const handleSearch = useDebounce((term) => {
    setSearchParams({ q: term });
    navigate(`/search?q=${term}`);
  }, 500);

  return (
    <SearchContainer>
      <Input
        handler={(val) => handleSearch(val)}
        placeholder="Search for movies or TV series"
        type="search"
        search
      />
    </SearchContainer>
  );
};

export default Search;
