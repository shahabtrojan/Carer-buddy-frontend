import React from "react";
import { Stack, Menu, MenuItem } from "@mui/material";
import ChatPersonButton from "../../pages/chat-page/components/ChatPersonButton";
import { useNavigate } from "react-router-dom";

function MenuPopup({ anchorEl, setAnchorEl }) {
  const navigate = useNavigate();
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Menu
      anchorEl={anchorEl}
      id="account-menu"
      open={open}
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
  );
}

export default MenuPopup;
