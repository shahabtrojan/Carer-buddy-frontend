import React from "react";
import { Avatar, Badge, Stack, Typography } from "@mui/material";

function ChatPersonButton({
  personName = "Person Name",
  personImage = "https://h5p.org/sites/default/files/h5p/content/1209180/images/file-6113d61122a5d.jpeg",
  lastMessage = "How are You?",
  activeChat = false,
  unReadMessageCount = 0,
  id,
  handleChangeActiveChat,
  disableborderBottom = false,
}) {
  return (
    <Stack
      direction="row"
      sx={{
        alignItems: "center",
        borderBottom: disableborderBottom ? 0 : 1,
        padding: 1,
        position: "relative",
        backgroundColor: activeChat ? "silver" : "",
        cursor: "pointer",
      }}
      className=" w-100"
      onClick={() => handleChangeActiveChat(id)}
    >
      <Avatar alt="Remy Sharp" src={personImage} />
      <Stack sx={{ paddingLeft: 1, paddingRight: 1 }}>
        <Typography>{personName}</Typography>
        <Typography
          sx={{
            fontSize: 12,
            maxWidth: 200,
            maxHeight: 20,
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {lastMessage}
        </Typography>
      </Stack>
      <Badge
        style={{ position: "absolute", top: "50%", right: 20 }}
        badgeContent={unReadMessageCount}
        color="primary"
      />
    </Stack>
  );
}

export default ChatPersonButton;
