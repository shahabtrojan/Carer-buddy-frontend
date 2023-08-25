import React, { useEffect, useState } from "react";
import { Button, Stack } from "@mui/material";
import { useParams } from "react-router-dom";

function TabFooter({ isDisabled, handleChangeDisableStatus, handleUpdate }) {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(false);
  }, [isDisabled]);
  if (id) {
    return <></>;
  }
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
            onClick={() => {
              setIsLoading(true);
              handleUpdate();
            }}
            variant="contained"
            color="primary"
            disabled={isLoading}
          >
            Update
          </Button>
        </Stack>
      )}
    </div>
  );
}

export default TabFooter;
