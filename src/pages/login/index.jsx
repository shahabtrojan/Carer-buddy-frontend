import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Avatar, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { login_user } from "../../dal/user";
import { useSnackbar } from "notistack";
import { useAppContext } from "../../hooks/AppContext";

export default function Login() {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const { setProfile, setIsAuthenticated } = useAppContext();
  const [isLoading, setIsLoading] = React.useState(false);
  const handleSubmit = async (event) => {
    setIsLoading(true);
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const postData = {
      email: data.get("email"),
      password: data.get("password"),
    };
    const response = await login_user(postData);
    if (response.code === 200) {
      localStorage.setItem("token", response.token);

      localStorage.setItem("profile", JSON.stringify(response.user));
      setProfile({ ...response.user });
      setIsAuthenticated(true);
      navigate("/feed");
      enqueueSnackbar("Login Success", { variant: "success" });
    } else {
      enqueueSnackbar(response.message, { variant: "error" });
    }
    setIsLoading(false);
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            disabled={isLoading}
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/auth/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
