import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

function MuiSelect({ label, value, isDisabled, handleChange, optionList }) {
  return (
    <div className="col-md-6 p-2">
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label={label}
          disabled={isDisabled}
          onChange={handleChange}
        >
          {optionList.map((interest) => (
            <MenuItem value={interest} key={interest}>
              {interest}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default MuiSelect;
