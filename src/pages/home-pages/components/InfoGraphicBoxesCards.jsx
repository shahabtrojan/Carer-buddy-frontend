import { Stack } from "@mui/material";
import React from "react";

function InfoGraphicBoxesCards({ imgLink, heading1, heading2, heading3 }) {
  return (
    <div className="col-md-4 p-4">
      <Stack className="d-flex align-items-center">
        <img
          style={{ marginBottom: 10 }}
          decoding="async"
          loading="lazy"
          class="alignnone size-full wp-image-1844"
          src={imgLink}
          alt=""
          width="159"
          height="134"
        />
        <p style={{ textAlign: "center" }}>
          <span style={{ color: "#00b4ea" }}>{heading1}</span>
        </p>
        <p>{heading2}</p>
        <p>{heading3}</p>
      </Stack>
    </div>
  );
}

export default InfoGraphicBoxesCards;
