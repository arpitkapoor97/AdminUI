import React from "react";
import { TableCell, TableRow } from "@mui/material";
import { Checkbox, IconButton } from "@mui/material";

import Input from "@mui/material/Input";

import CancelIcon from "@mui/icons-material/Cancel";
import SaveIcon from "@mui/icons-material/Save";

function EditableRow({ tableRow, handleRowSave, handleRowCancel }) {
  const [tableRowData, setTableRowData] = React.useState(tableRow);

  const handleSave = (e) => {
    handleRowSave(e, tableRowData);
  };

  return (
    <>
      <TableRow key={tableRow.id}>
        <TableCell padding="checkbox">
          <Checkbox color="primary" />
        </TableCell>
        <TableCell>
          <Input
            id="name"
            defaultValue={tableRow.name}
            onChange={(e) => {
              setTableRowData({
                ...tableRowData,
                name: e.target.value,
              });
            }}
          />
        </TableCell>
        <TableCell>
          <Input
            id="email"
            defaultValue={tableRow.email}
            onChange={(e) => {
              setTableRowData({
                ...tableRowData,
                email: e.target.value,
              });
            }}
          />
        </TableCell>
        <TableCell
          style={{
            textTransform: "capitalize",
          }}
        >
          <Input
            id="role"
            defaultValue={tableRow.role}
            onChange={(e) => {
              setTableRowData({
                ...tableRowData,
                role: e.target.value,
              });
            }}
          />
        </TableCell>
        <TableCell>
          <IconButton onClick={(e) => handleSave(e)}>
            <SaveIcon />
          </IconButton>
          <IconButton onClick={handleRowCancel}>
            <CancelIcon />
          </IconButton>
        </TableCell>
      </TableRow>
    </>
  );
}

export default EditableRow;
