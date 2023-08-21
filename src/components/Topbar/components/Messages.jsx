import React from "react";
import MailIcon from "@mui/icons-material/Mail";
import { Badge, IconButton } from "@mui/material";

function Messages({ handleOpenMenu }) {
  return (
    <>
      <IconButton
        size="large"
        aria-label="show 4 new mails"
        color="inherit"
        onClick={handleOpenMenu}
      >
        <Badge badgeContent={4} color="error">
          <MailIcon />
        </Badge>
      </IconButton>
    </>
  );
}

export default Messages;
