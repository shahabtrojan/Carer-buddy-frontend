import React from "react";
import { Avatar, IconButton, Menu, MenuItem, Tooltip } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../../hooks/AppContext";

function Profile() {
  const { profile } = useAppContext();
  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <>
      <Tooltip title="Open settings" arrow placement="top">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar
            alt={profile.first_name[0]}
            src={profile.image ? profile.image : ""}
          />
        </IconButton>
      </Tooltip>
      <Menu
        className="menu__wrapper"
        sx={{ mt: "40px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 15,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {/* <Stack sx={{ minWidth: 100 }}> */}
        <MenuItem
          className="menu__item"
          onClick={() => {
            navigate("/profile");
            handleCloseUserMenu();
          }}
        >
          <AccountCircleIcon sx={{ marginRight: 2 }} />
          Profile
        </MenuItem>
        <MenuItem
          className="menu__item"
          onClick={() => {
            localStorage.clear();
            navigate("/auth/login");
          }}
        >
          <LogoutIcon sx={{ marginRight: 2 }} />
          Logout
        </MenuItem>
        {/* </Stack> */}
      </Menu>
    </>
  );
}

export default Profile;
