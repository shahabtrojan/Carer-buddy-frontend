import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Badge, IconButton } from "@mui/material";

function Notifications({ handleOpenMenu }) {
  return (
    <IconButton
      sx={{ marginRight: 2 }}
      size="large"
      aria-label="show 17 new notifications"
      color="inherit"
      onClick={handleOpenMenu}
    >
      <Badge badgeContent={17} color="error">
        <NotificationsIcon />
      </Badge>
    </IconButton>
  );
}

export default Notifications;
