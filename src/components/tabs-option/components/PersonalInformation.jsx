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
import { useAppContext } from "../../../hooks/AppContext";
import { update_personal_info } from "../../../dal/user";
import { useSnackbar } from "notistack";

function PersonalInformation({ isDisabled, handleChangeDisableStatus }) {
  const { enqueueSnackbar } = useSnackbar();
  const { profile, setProfile } = useAppContext();
  const [inputs, setInputs] = useState({
    ...profile,
  });
  const handleUpdatePersonalInfo = async () => {
    const postData = {
      first_name: inputs.first_name,
      last_name: inputs.last_name,
      gender: inputs.gender,
    };
    const response = await update_personal_info(postData);
    if (response.code === 200) {
      setProfile(response.user);
      localStorage.setItem("profile", JSON.stringify(response.user));
      handleChangeDisableStatus(true);
      enqueueSnackbar(response.message, { variant: "success" });
    } else {
      enqueueSnackbar(response.message, { variant: "error" });
    }
  };
  const handleChage = (e, altName) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name || altName]: value });
  };
  useEffect(() => {
    return () => {
      handleChangeDisableStatus(true);
      setInputs({ ...profile });
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
            value={inputs.first_name}
            onChange={handleChage}
            disabled={isDisabled}
          />
        </div>
        <div className="col-md-6 p-2">
          <TextField
            sx={{ width: "100%" }}
            name="last_name"
            label="Last Name"
            value={inputs.last_name}
            onChange={handleChage}
            disabled={isDisabled}
          />
        </div>
        <div className="col-md-6 p-2">
          <TextField
            sx={{ width: "100%" }}
            name="email"
            label="Email"
            type="email"
            value={inputs.email}
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
              value={inputs.gender}
              onChange={(e) => handleChage(e, "gender")}
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
          handleUpdate={handleUpdatePersonalInfo}
        />
      </div>
    </Box>
  );
}

export default PersonalInformation;
