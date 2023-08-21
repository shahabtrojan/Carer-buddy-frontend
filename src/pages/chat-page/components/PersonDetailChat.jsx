import React from "react";
import { Stack, Typography } from "@mui/material";

function PersonDetailChat({ chat }) {
  return (
    <Stack
      spacing={1}
      direction="column-reverse"
      sx={{ height: "100%", overflow: "auto", paddingBottom: 9 }}
    >
      {chat.map((chatMessage, index) => (
        <Stack
          direction={index % 2 === 0 ? "row" : "row-reverse"}
          key={index}
          id={index}
          sx={{ padding: "0px 15px" }}
        >
          <Typography
            sx={{
              display: "inline",
              padding: "4px 10px",
              backgroundColor: index % 2 === 0 ? "lightgrey" : "skyblue",
              borderRadius: 1,
              maxWidth: "70%",
            }}
          >
            {chatMessage}
          </Typography>
        </Stack>
      ))}
    </Stack>
  );
}

export default PersonDetailChat;
