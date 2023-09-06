import { Box, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import TabFooter from "./TabFooter";
import { useAppContext } from "../../../hooks/AppContext";
import { useSnackbar } from "notistack";
import { update_location } from "../../../dal/user";
import { useGeolocated } from "react-geolocated";

function SelectLocation({
  isDisabled,
  handleChangeDisableStatus,
  personProfile,
}) {
  const { enqueueSnackbar } = useSnackbar();
  const {
    coords,
    getPosition,
    isGeolocationAvailable,
    isGeolocationEnabled,
    positionError,
  } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 1000000,
    watchLocationPermissionChange: true,
  });
  const { setProfile } = useAppContext();
  const [inputs, setInputs] = useState({
    longitude: personProfile?.locations?.longitude || "",
    latitude: personProfile?.locations?.latitude || "",
  });

  const handleUpdateLocation = async () => {
    const postData = {
      locations: { longitude: inputs.longitude, latitude: inputs.latitude },
    };
    const response = await update_location(postData);
    if (response.code === 200) {
      const user = {
        ...response.user,
        ...postData,
      };
      setProfile({ ...user });
      localStorage.setItem("profile", JSON.stringify(user));
      handleChangeDisableStatus(true);
      enqueueSnackbar(response.message, { variant: "success" });
    } else {
      enqueueSnackbar(response.message, { variant: "error" });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  useEffect(() => {
    return () => {
      handleChangeDisableStatus(true);
      setInputs({
        longitude: personProfile?.locations?.longitude || "",
        latitude: personProfile?.locations?.latitude || "",
      });
    };
  }, []);
  return (
    <Box sx={{ width: "100%" }}>
      <div className="row">
        <div
          className="col-12 row"
          style={
            isDisabled
              ? { opacity: 0, pointerEvents: "none" }
              : {
                  opacity: 1,
                  color: "black",
                  fontSize: 12,
                  height: 80,
                }
          }
        >
          {!isGeolocationAvailable ? (
            <div className="col-12">
              Your browser does not support Geolocation.
            </div>
          ) : !isGeolocationEnabled ? (
            <div className="col-12">Geolocation is not enabled.</div>
          ) : coords ? (
            <>
              <div className="col-12">
                These are Your Coordinates You can use Them or add Manual
                Cordinates
                <Button
                  size="small"
                  className="text-capitalize"
                  sx={{ fontSize: 10 }}
                  onClick={() => {
                    setInputs({
                      ...inputs,
                      longitude: coords.longitude,
                      latitude: coords.latitude,
                    });
                  }}
                >
                  Copy Location
                </Button>
              </div>
              <div className="col-12">Longitude : {coords.longitude}</div>
              <div className="col-12">Latitude : {coords.latitude} </div>
              <br />
            </>
          ) : (
            <div className="col-12" style={{ color: "red" }}>
              Getting the location data&hellip;
            </div>
          )}
        </div>

        <div className="col-md-6 p-2">
          <TextField
            sx={{ width: "100%" }}
            name="longitude"
            label="Longitude"
            type="number"
            value={inputs.longitude}
            onChange={handleChange}
            disabled={isDisabled}
          />
        </div>
        <div className="col-md-6 p-2">
          <TextField
            sx={{ width: "100%" }}
            name="latitude"
            label="Latitude"
            type="number"
            value={inputs.latitude}
            onChange={handleChange}
            disabled={isDisabled}
          />
        </div>
        <TabFooter
          isDisabled={isDisabled}
          handleChangeDisableStatus={handleChangeDisableStatus}
          handleUpdate={handleUpdateLocation}
        />
      </div>
    </Box>
  );
}

export default SelectLocation;
