import React from "react";
import { TableContainer, Table, TableBody } from "@mui/material";

import MainHead from "./MainHead";
import MainBody from "./MainBody";
import MainPagination from "./MainPagination";

import Chip from "@mui/material/Chip";

function MainTable({ apiData, loading }) {
  const [tableData, setTableData] = React.useState(apiData);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [selectedRows, setSelectedRows] = React.useState([]);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;

  const [currentRows, setCurrentRows] = React.useState(
    tableData.slice(indexOfFirstRow, indexOfLastRow)
  );

  const handleRowData = (newRowData, id) => {
    if (newRowData != null) {
      const updatedData = tableData.map((dataObj) => {
        return dataObj.id == newRowData.id ? newRowData : dataObj;
      });
      setTableData(updatedData);
    } else {
      const updatedData = [...tableData];
      const index = updatedData.findIndex((data) => data.id == id);
      // console.log(index, id);
      updatedData.splice(index, 1);
      setTableData(updatedData);
    }
  };

  React.useEffect(() => {
    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    setCurrentRows(tableData.slice(indexOfFirstRow, indexOfLastRow));
  }, [tableData, currentPage]);

  React.useEffect(() => {
    // console.log(currentRows);
  }, [currentRows]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleSelectedDelete = (selectedRows) => {
    // setDeleteSelected(true);
    // handleRowData(null, id)
  };

  return (
    <>
      <TableContainer>
        <Table>
          <MainHead />
          <MainBody
            currentRows={currentRows}
            handleRowData={handleRowData}
            setSelectedRows={setSelectedRows}
          />
        </Table>
      </TableContainer>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Chip
          label="Delete Selected"
          color="error"
          style={{
            marginRight: "10rem",
          }}
          onClick={handleSelectedDelete}
        />
        <MainPagination
          rowsPerPage={rowsPerPage}
          totalRows={tableData.length}
          handlePageChange={handlePageChange}
        />
      </div>
    </>
  );
}

export default MainTable;
