import Input from "../ui/Input";
import { useDebounce } from "../hooks/useDebounce";
import { useNavigate, useSearchParams } from "react-router-dom";

const Search: React.FC = () => {
  let [_, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  // handleSearch
  const handleSearch = useDebounce((term) => {
    setSearchParams({ q: term });
    navigate(`/search?q=${term}`);
  }, 500);

  return (
    <div className="search_field">
      <Input
        handler={(val) => handleSearch(val)}
        placeholder="Search for movies or TV series"
        type="search"
        search
      />
    </div>
  );
};

export default Search;
