import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

function Loader() {
  return (
    <div style={{ position: "absolute", top: "47%", left: "47%" }}>
      <CircularProgress />
    </div>
  );
}

export default Loader;
