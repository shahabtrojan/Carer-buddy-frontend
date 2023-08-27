import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Accordion4() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h5 style={{ fontSize: 18 }}>
            4. How and why is your information used?
          </h5>
        </AccordionSummary>
        <AccordionDetails>
          <div style={{ display: "block" }}>
            <p>
              We may use your information for a number of different purposes,
              which may include:
            </p>
            <ul>
              <li>Keeping a record of your relationship with us.</li>
              <li>
                Carrying out our obligations under any contracts entered into
                between you and us.
              </li>
              <li>
                Providing you with the services or information you asked for.
              </li>
              <li>
                For internal administrative purposes, and to let you know about
                changes to our services or policies that may affect you.
              </li>
              <li>
                Checking for updated contact details against third party sources
                so we can stay in touch if you move (please refer to section
                ‘keeping your information up to date’).
              </li>
              <li>
                Seeking your views or comments on the services and information
                we provide.
              </li>
              <li>Notifying you of any changes to our services.</li>
              <li>
                Sending you communications which you have requested and that may
                be of interest to you. These may include information about
                events we may organise.
              </li>
              <li>Processing applications for volunteer opportunities.</li>
              <li>Processing applications for job opportunities.</li>
              <li>Record an event that you attend.</li>
            </ul>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
