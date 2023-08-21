import { Button, Stack } from "@mui/material";
import React from "react";

function TabFooter({ isDisabled, handleChangeDisableStatus }) {
  return (
    <div className="col-12 p-2 d-flex justify-content-end">
      {isDisabled ? (
        <Button
          className="text-capitalize"
          onClick={() => handleChangeDisableStatus(false)}
          variant="outlined"
        >
          Edit
        </Button>
      ) : (
        <Stack direction="row" spacing={2}>
          <Button
            className="text-capitalize"
            onClick={() => handleChangeDisableStatus(true)}
            variant="outlined"
            color="secondary"
          >
            Cancel
          </Button>

          <Button
            className="text-capitalize"
            onClick={() => handleChangeDisableStatus(false)}
            variant="contained"
            color="primary"
          >
            Update
          </Button>
        </Stack>
      )}
    </div>
  );
}

export default TabFooter;
