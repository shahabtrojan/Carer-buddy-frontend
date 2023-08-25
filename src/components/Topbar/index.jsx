import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Outlet, useNavigate } from "react-router-dom";
import Profile from "./components/Profile";
import Notifications from "./components/Notifications";
import Messages from "./components/Messages";
import MenuPopup from "../menu-popup/MenuPopup";
import { useAppContext } from "../../hooks/AppContext";

const drawerWidth = 200;
const authenticatedLinks = [
  { label: "Home", value: "/" },
  { label: "Feed", value: "/feed" },
  // { label: "Contact", value: "/contact" },
];
const unAuthenticatedLinks = [
  { label: "Home", value: "/" },
  { label: "Login", value: "/auth/login" },
  { label: "Signup", value: "/auth/signup" },
];

const checkSelected = (value) => {
  if (window.location.pathname === value) {
    return true;
  }
  return false;
};

function Topbar(props) {
  const { isAuthenticated } = useAppContext();
  const [navItems, setNavItems] = React.useState(
    isAuthenticated ? authenticatedLinks : unAuthenticatedLinks
  );
  React.useEffect(() => {
    setNavItems([
      ...(isAuthenticated ? authenticatedLinks : unAuthenticatedLinks),
    ]);
  }, [isAuthenticated]);

  const navigate = useNavigate();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const handleNavigate = (e) => {
    navigate(e.target.id);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ py: 2, backgroundColor: "lightblue" }}>
        Carers Buddy
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem
            selected={checkSelected(item.value)}
            className="menu__wrapper"
            onClick={handleNavigate}
            id={item.value}
            key={item.value}
            disablePadding
          >
            <ListItemButton className="menu__item" sx={{ textAlign: "left" }}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar component="nav">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            {isAuthenticated && (
              <Box
                flexGrow={1}
                className="d-flex d-sm-none justify-content-end align-items-center"
              >
                <Notifications />
                <Profile />
              </Box>
            )}
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              Carers Buddy
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Button
                  sx={{ color: checkSelected(item.value) ? "black" : "white" }}
                  onClick={handleNavigate}
                  key={item.value}
                  id={item.value}
                >
                  {item.label}
                </Button>
              ))}
              {isAuthenticated && (
                <>
                  <Notifications />

                  <Profile />
                </>
              )}
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box className="w-100">
          <Toolbar />
          <Outlet />
        </Box>
      </Box>
    </>
  );
}

export default Topbar;
