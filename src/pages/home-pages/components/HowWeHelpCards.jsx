import { Stack } from "@mui/material";
import React from "react";

function HowWeHelpCards({ backgroundColor, iconLink, title, description }) {
  return (
    <Stack className="col-md-4 mb-4">
      <Stack
        sx={{
          backgroundColor: backgroundColor,
          padding: 2,
          borderRadius: 1,
          minHeight: { md: 280 },
        }}
      >
        <img
          style={{ marginBottom: 20 }}
          decoding="async"
          loading="lazy"
          class="alignnone size-full wp-image-984"
          src={iconLink}
          alt=""
          width="57"
          height="56"
        />
        <h3
          style={{
            color: backgroundColor === "#28397a" ? "white" : "",
          }}
        >
          {title}
        </h3>
        <p
          style={{
            marginBottom: "1rem",
            fontSize: "inherit",
            color: "white",
            lineHeight: 1.6,
            textRendering: "optimizeLegibility",
          }}
        >
          {description}
        </p>
      </Stack>
    </Stack>
  );
}

export default HowWeHelpCards;
