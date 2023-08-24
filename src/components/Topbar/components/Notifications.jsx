import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../../hooks/AppContext";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Badge, IconButton, Menu, MenuItem, Stack } from "@mui/material";
import ChatPersonButton from "../../../pages/chat-page/components/ChatPersonButton";

function Notifications() {
  const navigate = useNavigate();
  const { notifications } = useAppContext();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
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
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={Boolean(anchorEl)}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 0.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            // "&:before": {
            //   content: '""',
            //   display: "block",
            //   position: "absolute",
            //   top: 0,
            //   right: "40%",
            //   width: 10,
            //   height: 10,
            //   bgcolor: "background.paper",
            //   transform: "translateY(-50%) rotate(45deg)",
            //   zIndex: 0,
            // },
          },
        }}
        transformOrigin={{ horizontal: "center", vertical: "top" }}
        anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
      >
        <Stack sx={{ width: 300, height: 400 }}>
          <MenuItem sx={{ borderBottom: 1 }}>
            <ChatPersonButton
              disableborderBottom
              handleChangeActiveChat={() => navigate("/chat")}
            />
          </MenuItem>
        </Stack>
      </Menu>
    </>
  );
}

export default Notifications;
