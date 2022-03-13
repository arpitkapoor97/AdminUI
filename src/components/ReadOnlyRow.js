import React from "react";
import { TableCell, TableRow } from "@mui/material";
import { Checkbox, IconButton } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";

function ReadOnlyRow({
  tableRow,
  handleRowEdit,
  handleRowDelete,
  handleRowChecked,
}) {
  return (
    <>
      <TableRow selected={tableRow.isSelected}>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            //   checked={isItemSelected}
            onClick={(e) => {
              // handleRowChecked(e, tableRow.id);
            }}
          />
        </TableCell>
        <TableCell>{tableRow.name}</TableCell>
        <TableCell>{tableRow.email}</TableCell>
        <TableCell
          style={{
            textTransform: "capitalize",
          }}
        >
          {tableRow.role}
        </TableCell>
        <TableCell>
          <IconButton
            onClick={(e) => {
              // console.log(tableRow.id);
              handleRowEdit(e, tableRow.id);
            }}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            onClick={(e) => {
              handleRowDelete(e, tableRow.id);
            }}
          >
            <DeleteOutlineIcon />
          </IconButton>
        </TableCell>
      </TableRow>
    </>
  );
}

export default ReadOnlyRow;
