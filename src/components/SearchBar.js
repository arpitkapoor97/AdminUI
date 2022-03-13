import * as React from "react";
import TextField from "@mui/material/TextField";

function SearchBar({ handleSearchText }) {
  return (
    <>
      <TextField
        style={{
          width: "100%",
          marginBottom: "1rem",
        }}
        placeholder="Search by name, email, or role"
        onChange={(e) => {
          handleSearchText(e.target.value);
        }}
      />
    </>
  );
}

export default SearchBar;
