import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PersonalInformation from "./components/PersonalInformation";
import SelectInterest from "./components/SelectInterest";
import SelectDisease from "./components/SelectDisease";
import SelectLocation from "./components/SelectLocation";
import { CircularProgress, LinearProgress, Stack } from "@mui/material";
import CustomProgressBar from "../custom-progressbar/CustomProgressBar";
import { useParams } from "react-router-dom";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TabsOption({ personProfile }) {
  const { id } = useParams();
  const [value, setValue] = React.useState(0);
  const [isDisabled, setIsDisabled] = React.useState(true);
  const handleChangeDisableStatus = (status = !isDisabled) => {
    setIsDisabled(status);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", position: "relative" }}>
      {!id && (
        <Stack
          sx={{
            display: { xs: "none", md: "auto" },
            position: "absolute",
            top: 5,
            right: 0,
          }}
        >
          <CustomProgressBar />
        </Stack>
      )}
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          maxWidth: 600,
        }}
      >
        <Tabs
          variant="scrollable"
          scrollButtons="auto"
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Personal Information" {...a11yProps(1)} />
          <Tab label="Interest" {...a11yProps(0)} />
          <Tab label="Disease" {...a11yProps(2)} />
          <Tab label="Location" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <PersonalInformation
          isDisabled={isDisabled}
          handleChangeDisableStatus={handleChangeDisableStatus}
          personProfile={personProfile}
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <SelectInterest
          isDisabled={isDisabled}
          handleChangeDisableStatus={handleChangeDisableStatus}
          personProfile={personProfile}
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <SelectDisease
          isDisabled={isDisabled}
          handleChangeDisableStatus={handleChangeDisableStatus}
          personProfile={personProfile}
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <SelectLocation
          isDisabled={isDisabled}
          handleChangeDisableStatus={handleChangeDisableStatus}
          personProfile={personProfile}
        />
      </CustomTabPanel>
    </Box>
  );
}
