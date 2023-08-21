import React, { useState } from "react";
import { IconButton, Stack, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

function SendMessageField({ handleSendMessage }) {
  const [message, setMessage] = useState("");
  const sendMessage = () => {
    handleSendMessage(message);
    setMessage("");
  };

  return (
    <Stack
      sx={{
        position: "absolute",
        bottom: 0,
        width: "100%",
        backgroundColor: "white",
      }}
    >
      <Stack direction="row" spacing={1}>
        <TextField
          maxRows={3}
          multiline
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          sx={{ width: "100%" }}
          onSubmit={sendMessage}
        />
        <IconButton
          disabled={message.trim().length === 0}
          onClick={sendMessage}
        >
          <SendIcon
            color={message.trim().length > 0 ? "primary" : "disabled"}
          />
        </IconButton>
      </Stack>
    </Stack>
  );
}

export default SendMessageField;
