import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { interestList } from "../../../utils/constant";
import MuiSelect from "./MuiSelect";
import TabFooter from "./TabFooter";

function SelectInterest({ isDisabled, handleChangeDisableStatus }) {
  const [interest, setInterest] = useState(["", "", ""]);

  const handleChange = (e, index) => {
    interest[index] = e.target.value;
    setInterest([...interest]);
  };

  useEffect(() => {
    return () => {
      handleChangeDisableStatus(true);
    };
  }, []);
  return (
    <Box sx={{ width: "100%" }}>
      <div className="row">
        {interest.map((single_interest, index) => (
          <MuiSelect
            label={`Interest ${index + 1}`}
            value={single_interest}
            handleChange={(e) => handleChange(e, index)}
            isDisabled={isDisabled}
            optionList={interestList}
          />
        ))}
        <TabFooter
          isDisabled={isDisabled}
          handleChangeDisableStatus={handleChangeDisableStatus}
        />
      </div>
    </Box>
  );
}

export default SelectInterest;
