import { Box, Button, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { commonDiseases, interestList } from "../../../utils/constant";
import MuiSelect from "./MuiSelect";
import TabFooter from "./TabFooter";
import { update_disease } from "../../../dal/user";
import { useSnackbar } from "notistack";
import { useAppContext } from "../../../hooks/AppContext";

function SelectDisease({ isDisabled, handleChangeDisableStatus,personProfile }) {
  const { enqueueSnackbar } = useSnackbar();
  const { profile, setProfile } = useAppContext();
  const [diseases, setDiseases] = useState([
    personProfile.diseases[0] || "",
    personProfile.diseases[1] || "",
    personProfile.diseases[2] || "",
  ]);

  const handleUpdateDiseases = async () => {
    const postData = {
      diseases: [...diseases],
    };
    const response = await update_disease(postData);
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
    diseases[index] = e.target.value;
    setDiseases([...diseases]);
  };

  useEffect(() => {
    return () => {
      setDiseases([
        personProfile.diseases[0] || "",
        personProfile.diseases[1] || "",
        personProfile.diseases[2] || "",
      ]);
      handleChangeDisableStatus(true);
    };
  }, []);
  return (
    <Box sx={{ width: "100%" }}>
      <div className="row">
        {commonDiseases.map((single_diseases, index) => (
          <MuiSelect
            label={`Disease ${index + 1}`}
            value={single_diseases}
            handleChange={(e) => handleChange(e, index)}
            isDisabled={isDisabled}
            optionList={interestList}
          />
        ))}
        <TabFooter
          isDisabled={isDisabled}
          handleChangeDisableStatus={handleChangeDisableStatus}
          handleUpdate={handleUpdateDiseases}
        />
      </div>
    </Box>
  );
}

export default SelectDisease;
