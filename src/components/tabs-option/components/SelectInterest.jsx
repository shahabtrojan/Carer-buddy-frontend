import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { interestList } from "../../../utils/constant";
import MuiSelect from "./MuiSelect";
import TabFooter from "./TabFooter";
import { useAppContext } from "../../../hooks/AppContext";
import { useSnackbar } from "notistack";
import { update_interest } from "../../../dal/user";

function SelectInterest({
  isDisabled,
  handleChangeDisableStatus,
  personProfile,
}) {
  const { enqueueSnackbar } = useSnackbar();
  const { setProfile } = useAppContext();
  const [interest, setInterest] = useState([
    personProfile.interests[0] || "",
    personProfile.interests[1] || "",
    personProfile.interests[2] || "",
  ]);

  const handleUpdateInterest = async () => {
    const postData = {
      interests: [...interest],
    };
    const response = await update_interest(postData);
    if (response.code === 200) {
      setProfile(response.user);
      localStorage.setItem("profile", JSON.stringify(response.user));
      handleChangeDisableStatus(true);
      enqueueSnackbar(response.message, { variant: "success" });
    } else {
      enqueueSnackbar(response.message, { variant: "error" });
    }
  };

  const handleChange = (e, index) => {
    interest[index] = e.target.value;
    setInterest([...interest]);
  };

  useEffect(() => {
    return () => {
      setInterest([
        personProfile.interests[0] || "",
        personProfile.interests[1] || "",
        personProfile.interests[2] || "",
      ]);
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
          handleUpdate={handleUpdateInterest}
        />
      </div>
    </Box>
  );
}

export default SelectInterest;
