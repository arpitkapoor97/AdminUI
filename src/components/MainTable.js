import React from "react";
import { TableContainer, Table, Paper, makeStyles } from "@mui/material";

import MainHead from "./MainHead";
import MainBody from "./MainBody";
import MainPagination from "./MainPagination";

import CircularProgress from "@mui/material/CircularProgress";

import Chip from "@mui/material/Chip";

function MainTable({ apiData, loading }) {
  const [tableData, setTableData] = React.useState(apiData);
  const [currentPage, setCurrentPage] = React.useState(1);
  // const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [selectedRowIds, setSelectedRowIds] = React.useState([]);

  const rowsPerPage = 10;

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;

  const [allSelected, setAllSelected] = React.useState(false);

  const [currentRows, setCurrentRows] = React.useState(
    tableData.slice(indexOfFirstRow, indexOfLastRow)
  );

  const handleRowData = (newRowData, id) => {
    if (newRowData != null) {
      const updatedData = tableData.map((dataObj) => {
        return dataObj.id === newRowData.id ? newRowData : dataObj;
      });
      setTableData(updatedData);
    } else {
      const updatedData = [...tableData];
      const index = updatedData.findIndex((data) => data.id === id);
      updatedData.splice(index, 1);
      setTableData(updatedData);
    }
  };

  React.useEffect(() => {
    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    setCurrentRows(tableData.slice(indexOfFirstRow, indexOfLastRow));
  }, [tableData, currentPage]);

  // React.useEffect(() => {
  //   // console.log("currentRows updated", currentRows);
  // }, [currentRows]);

  React.useEffect(() => {
    setTableData(apiData);
  }, [apiData]);

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

  const divContainerStyles = {
    height: "85vh",
    display: "flex",
    flexDirection: "column",
    // background: "red",
  };

  return (
    <div style={divContainerStyles}>
      {loading ? (
        <CircularProgress />
      ) : (
        <TableContainer
          style={{
            flexGrow: 1,
            maxHeight: "100%",
            // overflow: "hidden",
          }}
          component={Paper}
        >
          <Table stickyHeader>
            <MainHead
              allSelected={selectedRowIds.length === currentRows.length}
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
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          marginTop: "1rem",
        }}
      >
        <Chip
          label="Delete Selected"
          color="error"
          style={{
            marginRight: "auto",
          }}
          onClick={handleSelectedDelete}
        />
        <MainPagination
          rowsPerPage={rowsPerPage}
          totalRows={tableData.length}
          handlePageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default MainTable;
