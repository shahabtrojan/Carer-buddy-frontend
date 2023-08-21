import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Button, IconButton, Stack } from "@mui/material";

function NavBar() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6">
          <img
            src="https://carersek.org.uk/wp-content/uploads/2022/03/Carers-EK-2019-v-sml.jpg"
            alt="Carers' Support East Kent"
          />
        </div>
        <div className="col-6 d-flex align-items-center justify-content-end">
          <Button variant="contained" className="text-capitalize">
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
