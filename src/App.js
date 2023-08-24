import React from "react";
import { SnackbarProvider, closeSnackbar } from "notistack";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton, ThemeProvider } from "@mui/material";
import AppRoutes from "./router";
import theme from "./theme";
import "./App.css";
import { AppContextProvider } from "./hooks/AppContext";

function App() {
  return (
    <AppContextProvider>
      <ThemeProvider theme={theme}>
        <SnackbarProvider
          preventDuplicate
          action={(snackbarId) => (
            <IconButton onClick={() => closeSnackbar(snackbarId)}>
              <CloseIcon sx={{ color: "white" }} />
            </IconButton>
          )}
          autoHideDuration={5000}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          maxSnack={4}
          // iconVariant={{
          //   success: "✅",
          //   error: "✖️",
          //   warning: "⚠️",
          //   info: "ℹ️",
          // }}
        >
          <AppRoutes />
        </SnackbarProvider>
      </ThemeProvider>
    </AppContextProvider>
  );
}

export default App;
