import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import ConfirmationDialog from "../../../components/confirmation-dialog/ConfirmationDialog";
import moment from "moment/moment";
import { defaultImg } from "../../../utils/constant";
import { request_message } from "../../../dal/user";
import { useSnackbar } from "notistack";
import { useAppContext } from "../../../hooks/AppContext";
import { Button, Typography } from "@mui/material";
import "../../../styles/feed.css";
import { useNavigate } from "react-router-dom";

export default function RecipeReviewCard({ user }) {
  const navigate = useNavigate();
  const { profile, fetchProfile, myRequestedUsers } = useAppContext();

  const { enqueueSnackbar } = useSnackbar();
  const [openMenu, setOpenMenu] = React.useState({ open: false });
  const handleOpenMenu = () => {
    setOpenMenu({
      open: true,
      heading: "Are You sure want to sent request?",
      body: "",
    });
  };
  const handleSendRequest = async () => {
    const response = await request_message(user._id);
    if (response.code === 200) {
      enqueueSnackbar("Request Sent.", { variant: "success" });
      fetchProfile();
      setOpenMenu({ ...openMenu, open: false });
    } else {
      enqueueSnackbar(response.message, { variant: "error" });
    }
  };
  const checkIncomingRequests = () => {
    let status = 0;
    if (profile && profile.message_request.length > 0) {
      profile.message_request.map((request) => {
        if (user._id == request.requested_by._id) {
          status = 1;
          if (request.requested_status == "accepted") {
            status = 2;
          }
        }
      });
    }
    return status;
  };
  const checkSendRequests = () => {
    let status = 0;
    if (myRequestedUsers && myRequestedUsers.length > 0) {
      myRequestedUsers.map((request) => {
        if (user._id == request._id) {
          status = 1;
          request.message_request.map((checkStatus) => {
            if (
              checkStatus.requested_status === "accepted" &&
              checkStatus.requested_by == profile._id
            ) {
              status = 2;
            }
          });
        }
      });
    }
    return status;
  };
  const getButton = () => {
    let status = checkIncomingRequests();
    if (status == 1) {
      return (
        <Button
          variant="outlined"
          sx={{ color: "white", fontSize: 8 }}
          onClick={() => navigate(`/profile/${user._id}`)}
        >
          Incoming Request
        </Button>
      );
    }
    if (status == 2) return;
    status = checkSendRequests();
    if (status == 1) {
      return (
        <Button variant="outlined" sx={{ color: "white", fontSize: 8 }}>
          Request Sent
        </Button>
      );
    }
    if (status == 2) return;
    return (
      <Button
        variant="outlined"
        sx={{ color: "white", fontSize: 8 }}
        onClick={handleOpenMenu}
      >
        Send Request
      </Button>
    );
  };
  return (
    <>
      <ConfirmationDialog
        open={openMenu.open}
        setOpen={setOpenMenu}
        heading={openMenu.heading}
        body={openMenu.body}
        handleAgree={handleSendRequest}
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
          action={getButton()}
          title={
            <Typography
              style={{ display: "inline-flex", cursor: "pointer" }}
              onClick={() => {
                navigate(`/profile/${user._id}`);
              }}
            >
              {user.first_name} {user.last_name}
            </Typography>
          }
          subheader={user.distance}
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
