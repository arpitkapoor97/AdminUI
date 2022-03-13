import React from "react";
import { TableCell, TableRow } from "@mui/material";
import { Checkbox, IconButton } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";

function ReadOnlyRow({
  tableRow,
  selectedRowIds,
  handleRowEdit,
  handleRowDelete,
  handleRowChecked,
}) {
  const [isSeletedChanged, setIsSelectedChanged] = React.useState(false);

  // React.useState(() => {
  //   // console.log("Re- rendered");
  // }, [isSeletedChanged]);

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
              handleRowChecked(e, tableRow.id);
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
