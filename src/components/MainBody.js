import React from "react";
import { TableBody } from "@mui/material";

import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";

function MainBody({ currentRows, handleRowData, setSelectedRows }) {
  const [editRowId, setEditRowId] = React.useState(null);

  const handleRowEdit = (e, id) => {
    e.preventDefault();
    setEditRowId(id);
  };

  const handleRowSave = (e, data) => {
    e.preventDefault();
    handleRowData(data);
    setEditRowId(null);
  };

  const handleRowCancel = (e) => {
    e.preventDefault();
    setEditRowId(null);
  };

  const handleRowDelete = (e, id) => {
    if (e != null) {
      e.preventDefault();
    }
    handleRowData(null, id);
  };

  return (
    <>
      <TableBody>
        {currentRows.map((tableRow) => {
          return (
            <React.Fragment key={tableRow.id}>
              {editRowId == tableRow.id ? (
                <EditableRow
                  tableRow={tableRow}
                  handleRowSave={handleRowSave}
                  handleRowCancel={handleRowCancel}
                  // handleRowChecked={handleRowChecked}
                />
              ) : (
                <ReadOnlyRow
                  tableRow={tableRow}
                  handleRowEdit={handleRowEdit}
                  handleRowDelete={handleRowDelete}
                  // handleRowChecked={handleRowChecked}
                />
              )}
            </React.Fragment>
          );
        })}
      </TableBody>
    </>
  );
}

export default MainBody;
