import React from "react";
import { TableHead, TableCell, TableRow } from "@mui/material";

import { Checkbox } from "@mui/material";

function MainHead() {
  const headCells = [
    {
      id: "name",
      numeric: false,
      disablePadding: true,
      label: "Name",
    },
    {
      id: "email",
      numeric: true,
      disablePadding: false,
      label: "Email",
    },
    {
      id: "role",
      numeric: true,
      disablePadding: false,
      label: "Role",
    },
    {
      id: "actions",
      numeric: true,
      disablePadding: false,
      label: "Actions",
    },
  ];
  return (
    <>
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              color="primary"
              // indeterminate={numSelected > 0 && numSelected < rowCount}
              // checked={rowCount > 0 && numSelected === rowCount}
              // onChange={onSelectAllClick}
              inputProps={{
                "aria-label": "select all rows",
              }}
            />
          </TableCell>
          {headCells.map((headCell) => {
            return <TableCell key={headCell.id}>{headCell.label}</TableCell>;
          })}
        </TableRow>
      </TableHead>
    </>
  );
}

export default MainHead;
