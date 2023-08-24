import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";

import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { red } from "@mui/material/colors";
import ConfirmationDialog from "../../../components/confirmation-dialog/ConfirmationDialog";
import moment from "moment/moment";
import { defaultImg } from "../../../utils/constant";
import "../../../styles/feed.css";

export default function RecipeReviewCard({ user }) {
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
      <Card className="text-capitalize mb-4 mt-3 pb-3 border border-dark">
        <CardHeader
          className="card-header"
          avatar={
            <Avatar
              sx={{ bgcolor: red[500] }}
              aria-label="recipe"
              src={user.image}
            >
              {user.first_name[0].toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton onClick={handleOpenMenu}>
              <PersonAddIcon sx={{ color: "#fff" }} />
            </IconButton>
          }
          title={`${user.first_name} ${user.last_name}`}
          subheader={moment(user.createdAt).format("DD MMMM YYYY")}
        />
        <CardMedia
          component="img"
          image={user.image ? user.image : defaultImg}
          alt="Paella dish"
          style={{
            objectFit: "contain",
            maxHeight: "60vh",
          }}
        />
      </Card>
    </>
  );
}
