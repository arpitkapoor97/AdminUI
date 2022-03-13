import React from "react";
import Pagination from "@mui/material/Pagination";

function MainPagination({ rowsPerPage, totalRows, handlePageChange }) {
  const pageNumbers = [];
  for (let i = 0; i <= Math.ceil(totalRows / rowsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleChange = (e, newPage) => {
    handlePageChange(newPage);
  };

  return (
    <>
      <Pagination
        showFirstButton
        showLastButton
        onChange={handleChange}
        count={pageNumbers.length - 1}
        color="primary"
      />
    </>
  );
}

export default MainPagination;
