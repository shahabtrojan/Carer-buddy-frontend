import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";

import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { red } from "@mui/material/colors";
import ConfirmationDialog from "../../../components/confirmation-dialog/ConfirmationDialog";

export default function RecipeReviewCard() {
  const [openMenu, setOpenMenu] = React.useState({ open: false });
  const handleOpenMenu = () => {
    setOpenMenu({
      open: true,
      heading: "Are You sure want to sent request?",
      body: "",
    });
  };
  return (
    <>
      <ConfirmationDialog
        open={openMenu.open}
        setOpen={setOpenMenu}
        heading={openMenu.heading}
        body={openMenu.body}
        handleAgree={() => {}}
      />
      <Card>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton onClick={handleOpenMenu}>
              <PersonAddIcon />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
          alt="Paella dish"
          style={{ objectFit: "contain", maxHeight: "60vh" }}
        />
      </Card>
    </>
  );
}
