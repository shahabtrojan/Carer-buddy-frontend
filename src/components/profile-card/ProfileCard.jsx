import * as React from "react";
import Card from "@mui/material/Card";
import MessageIcon from "@mui/icons-material/Message";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { IconButton, Stack, Tooltip } from "@mui/material";

export default function ProfileCard() {
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardMedia
        component="img"
        sx={{ objectFit: "cover", height: 200 }}
        alt="green iguana"
        image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
      />
      <Stack direction="row" className="p-2 justify-content-between">
        <Typography gutterBottom variant="h5" component="div">
          Zubair Amin
        </Typography>

        <Tooltip title="Chat" arrow placement="top">
          <IconButton>
            <MessageIcon />
          </IconButton>
        </Tooltip>
      </Stack>
    </Card>
  );
}
