import React from "react";
import { TableCell, TableRow } from "@mui/material";
import { Checkbox, IconButton } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";

// import { styled } from "@mui/system";

function ReadOnlyRow({
  tableRow,
  selectedRowIds,
  handleRowEdit,
  handleRowDelete,
  handleRowChecked,
}) {
  const [isSeletedChanged, setIsSelectedChanged] = React.useState(false);

  return (
    <>
      <TableRow selected={selectedRowIds.includes(tableRow.id)}>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            checked={selectedRowIds.includes(tableRow.id)}
            onClick={(e) => {
              handleRowChecked(e, tableRow.id);
              setIsSelectedChanged(!isSeletedChanged);
            }}
          />
        </TableCell>
        <TableCell padding="none">{tableRow.name}</TableCell>
        <TableCell padding="none">{tableRow.email}</TableCell>
        <TableCell
          style={{
            textTransform: "capitalize",
          }}
        >
          {tableRow.role}
        </TableCell>
        <TableCell padding="none">
          <IconButton
            onClick={(e) => {
              handleRowEdit(e, tableRow.id);
            }}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            onClick={(e) => {
              handleRowDelete(e, tableRow.id);
            }}
            color="error"
          >
            <DeleteOutlineIcon />
          </IconButton>
        </TableCell>
      </TableRow>
    </>
  );
}

export default ReadOnlyRow;
