import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function BasicAccordion({ title, bodyList }) {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h5 style={{ fontSize: 18 }}>{title}</h5>
        </AccordionSummary>
        <AccordionDetails>
          {bodyList.map((body) => (
            <p style={{ marginBottom: 20, fontWeight: "500" }}>{body}</p>
          ))}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
