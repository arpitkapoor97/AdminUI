import React from "react";
import { TableContainer, Table, TableBody } from "@mui/material";

import MainHead from "./MainHead";
import MainBody from "./MainBody";
import MainPagination from "./MainPagination";

import Chip from "@mui/material/Chip";

// function handleClick() {
//   forceUpdate();
// }

function MainTable({ apiData, loading }) {
  const [tableData, setTableData] = React.useState(apiData);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [selectedRowIds, setSelectedRowIds] = React.useState([]);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;

  const [allSelected, setAllSelected] = React.useState(false);

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
    // console.log("Updated Table Data", tableData);
  }, [tableData, currentPage]);

  React.useEffect(() => {
    // console.log("currentRows updated", currentRows);
  }, [currentRows]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleSelectedDelete = () => {
    console.log(selectedRowIds);
    let updatedTableData = [...tableData];
    selectedRowIds.forEach((rowId) => {
      var removeIndex = updatedTableData.map((row) => row.id).indexOf(rowId);
      if (removeIndex >= 0) {
        updatedTableData.splice(removeIndex, 1);
      }
    });
    setTableData(updatedTableData);
  };

  const handleSelectAllClick = () => {
    if (allSelected) {
      setSelectedRowIds([]);
      setAllSelected(false);
    } else {
      const allSelectedRowsIds = currentRows.map((row) => row.id);
      setSelectedRowIds(allSelectedRowsIds);
      setAllSelected(true);
    }
  };

  return (
    <>
      <TableContainer>
        <Table>
          <MainHead
            allSelected={selectedRowIds.length == 10}
            handleSelectAllClick={handleSelectAllClick}
          />
          <MainBody
            currentRows={currentRows}
            handleRowData={handleRowData}
            selectedRowIds={selectedRowIds}
            setSelectedRowIds={setSelectedRowIds}
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
