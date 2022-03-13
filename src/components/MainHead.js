import React from "react";
import { TableHead, TableCell, TableRow } from "@mui/material";

import { Checkbox } from "@mui/material";

function MainHead({ allSelected, handleSelectAllClick }) {
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
              checked={allSelected}
              color="primary"
              onChange={handleSelectAllClick}
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
