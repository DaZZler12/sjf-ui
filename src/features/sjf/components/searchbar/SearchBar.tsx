import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import useDebounce from "../../../../customhooks/useDebounce";

//interface for the props
interface SearchBarProps {
  onSearch: (term: string) => void;
}

//  I have a useDebounce hook that I want to use to debounce the search term
const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    onSearch(debouncedSearchTerm);
  }, [debouncedSearchTerm, onSearch]);

  return (
    <TextField
      autoFocus
      margin="dense"
      id="search"
      label="Search"
      type="text"
      fullWidth
      variant="standard"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};
export default SearchBar;
