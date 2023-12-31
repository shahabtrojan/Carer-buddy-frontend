import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import TabFooter from "./TabFooter";
import { useAppContext } from "../../../hooks/AppContext";
import { update_personal_info } from "../../../dal/user";
import { useSnackbar } from "notistack";
import { useParams } from "react-router-dom";

function PersonalInformation({
  isDisabled,
  handleChangeDisableStatus,
  personProfile,
}) {
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const { setProfile, handleCheckProfileProgress, showPhone } = useAppContext();
  const [inputs, setInputs] = useState({
    ...personProfile,
  });
  const handleUpdatePersonalInfo = async () => {
    const postData = {
      ...personProfile,
      first_name: inputs.first_name,
      last_name: inputs.last_name,
      contact_number: inputs.contact_number,
      gender: inputs.gender,
      home_address: inputs.home_address,
      status: inputs.status,
      profile_completed: handleCheckProfileProgress() === 100 ? true : false,
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
      setInputs({ ...personProfile });
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
        {id ? (
          showPhone ? (
            <div className="col-md-6 p-2">
              <TextField
                sx={{ width: "100%" }}
                name="contact_number"
                label="Contact Number"
                type="email"
                value={inputs.contact_number}
                onChange={handleChage}
                disabled={isDisabled}
              />
            </div>
          ) : (
            ""
          )
        ) : (
          <div className="col-md-6 p-2">
            <TextField
              sx={{ width: "100%" }}
              name="contact_number"
              label="Contact Number"
              type="email"
              value={inputs.contact_number}
              onChange={handleChage}
              disabled={isDisabled}
            />
          </div>
        )}
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
              <MenuItem value="m">Male</MenuItem>
              <MenuItem value="f">Female</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="col-md-6 p-2">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-label">Status</InputLabel>
            <Select
              labelId="demo-simple-label"
              id="demo-simple-select-1"
              name="status"
              label="Status"
              value={inputs.status}
              onChange={(e) => handleChage(e, "status")}
              disabled={isDisabled}
            >
              <MenuItem value="single">Single</MenuItem>
              <MenuItem value="married">Married</MenuItem>
              <MenuItem value="divorced">Divorced</MenuItem>
              <MenuItem value="widowed">Widowed</MenuItem>
              <MenuItem value="separated">Separated</MenuItem>
              <MenuItem value="complicated">Complicated</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="col-12 p-2">
          <TextField
            sx={{ width: "100%" }}
            name="home_address"
            label="Address"
            value={inputs.home_address}
            onChange={handleChage}
            multiline
            rows={4}
            disabled={isDisabled}
          />
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
