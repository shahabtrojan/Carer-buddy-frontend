import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Accordion6() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h5 style={{ fontSize: 18 }}>
            6. Who has access to your information?
          </h5>
        </AccordionSummary>
        <AccordionDetails>
          <div style={{ display: "block" }}>
            <p>
              We do not sell or rent your information to third parties. We do
              not share your information with third parties for marketing
              purposes unless we have your consent to do so.
            </p>
            <p>
              Authorised employees will have access to your information where it
              is necessary, all employees have undertaken data protection
              training and understand their obligations when taking care of
              information on behalf of Carer’ Support East Kent.
            </p>
            <p>
              <strong>Third parties working on our behalf</strong>
            </p>
            <p>
              We may pass your information to our third-party service providers,
              suppliers’ subcontractors, and other associated organisations for
              the purposes of completing tasks and providing services to you on
              their behalf, for example, to process employment payroll.
            </p>
            <p>
              Please be assured that your data will not be processed by these
              third parties for any other reason than that stated unless you
              have requested us to do so, or we are required to do so by law.
              For example, for the purposes of prevention of fraud or other
              crime or any other requirement by law.
            </p>
            <p>
              We have performed a Third-Party Supplier assessment on all our
              suppliers and have identified a low risk for these organisations.
              Such decisions are assessed on a regular basis and our findings
              are kept for record purposes. If you would like to know more about
              which third parties we use please see here for more information.
              (coming soon).
            </p>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
