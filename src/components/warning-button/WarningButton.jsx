import React, { useState } from "react";
import ErrorIcon from "@mui/icons-material/Error";
import { IconButton, Stack, Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";

function WarningButton() {
  const navigate = useNavigate();
  const [showWarningLogo, setShowWarningLogo] = useState(false);

  return (
    <Stack
      direction="row"
      sx={{
        position: "fixed",
        bottom: 30,
        right: 40,
        color: "black",
        backgroundColor: "silver",
        borderWidth: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        transition: "all 0.3s",
        borderRadius: showWarningLogo ? "100%" : 0,
      }}
      onMouseEnter={() => {
        setShowWarningLogo(true);
      }}
      onMouseLeave={() => {
        setShowWarningLogo(false);
      }}
    >
      <Tooltip title="Complete Your Profile" arrow placement="top">
        <IconButton onClick={() => navigate("/profile")}>
          <ErrorIcon color="error" sx={{ height: 30, width: 30 }} />
        </IconButton>
      </Tooltip>
    </Stack>
  );
}

export default WarningButton;
