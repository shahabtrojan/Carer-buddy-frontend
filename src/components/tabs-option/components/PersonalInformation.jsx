import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import TabFooter from "./TabFooter";

function PersonalInformation({ isDisabled, handleChangeDisableStatus }) {
  const [inputs, setInputs] = useState({
    first_name: "",
    last_name: "",
    email: "",
  });

  useEffect(() => {
    return () => {
      handleChangeDisableStatus(true);
    };
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <div className="row">
        <div className="col-md-6 p-2">
          <TextField
            sx={{ width: "100%" }}
            name="first_name"
            label="First Name"
            disabled={isDisabled}
          />
        </div>
        <div className="col-md-6 p-2">
          <TextField
            sx={{ width: "100%" }}
            name="last_name"
            label="Last Name"
            disabled={isDisabled}
          />
        </div>
        <div className="col-md-6 p-2">
          <TextField
            sx={{ width: "100%" }}
            name="email"
            label="Email"
            type="email"
            disabled={true}
          />
        </div>
        <div className="col-md-6 p-2">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Gender"
              disabled={isDisabled}
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
            </Select>
          </FormControl>
        </div>
        <TabFooter
          isDisabled={isDisabled}
          handleChangeDisableStatus={handleChangeDisableStatus}
        />
      </div>
    </Box>
  );
}

export default PersonalInformation;
