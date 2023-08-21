import React from "react";
import { Button, Stack } from "@mui/material";

function EditProfileDataButton({ className, handleUpdate, handleCancel }) {
  return (
    <div className={`${className} edit__button__wrapper`}>
      <Stack direction="row" spacing={2}>
        <Button
          className="text-capitalize"
          size="small"
          variant="outlined"
          sx={{ minWidth: 100 }}
          onClick={handleCancel}
        >
          Cancel
        </Button>
        <Button
          className="text-capitalize"
          size="small"
          variant="contained"
          sx={{ minWidth: 100 }}
          onClick={handleUpdate}
        >
          Update
        </Button>
      </Stack>
    </div>
  );
}

export default EditProfileDataButton;
