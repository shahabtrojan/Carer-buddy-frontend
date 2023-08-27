import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Accordion8() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h5 style={{ fontSize: 18 }}>8. Your Rights</h5>
        </AccordionSummary>
        <AccordionDetails>
          <div style={{ display: "block" }}>
            <p>
              Under data protection laws in the UK, you have certain rights over
              the personal information that we hold about you. Here is a summary
              of the rights we think apply:
            </p>
            <p>
              <strong>Right to be informed</strong>
            </p>
            <p>
              You have the right to be informed as to how we use your data and
              under what lawful basis we carry out any processing. This Privacy
              Notice sets this information out however if you would like further
              information or feel that your rights are not being respected
              please get in contact with any of the details listed above.
            </p>
            <p>
              <strong>Right of access</strong>
            </p>
            <p>
              You have a right to request access to a copy of your personal
              information that we hold about you, along with the information on
              what personal information we use, why we use it, who we share it
              with, how long we keep it for and whenever it has been used for
              automated decision making. You can make a request for access free
              of charge and proof of identity is required.
            </p>
            <p>
              <strong>Right to r</strong>
              <b>ectification</b>
            </p>
            <p>
              Inaccurate or incomplete information we hold about you can be
              corrected. The accuracy of your information is important to us and
              we are working on ways to make this easier for you to review and
              correct the information that we hold about you. We will also carry
              out an annual accuracy check. If any of your information is out of
              date or if you are unsure of this, please get in touch through any
              of the contact details listed in this notice.
            </p>
            <p>
              <strong>Right to erasure</strong>
            </p>
            <p>
              You may ask us to delete some or all of your information we hold
              about you. Sometimes where we have a legal obligation we cannot
              erase your personal data.
            </p>
            <p>
              <strong>Right to restrict processing</strong>
            </p>
            <p>
              You have a right to restrict the processing of some or all of your
              personal information if there is a disagreement about its
              accuracy, or we are not lawfully allowed to use it.
            </p>
            <p>
              <strong>Right to data portability</strong>
            </p>
            <p>
              You can ask us to provide you or a third party with some of the
              personal information that we hold about you in a structured.
              Commonly used, electronic form so it can be easily transferred.
            </p>
            <p>
              <strong>Right to object</strong>
            </p>
            <p>
              You have the right to object to processing where we are using your
              personal information such as where it is based on legitimate
              interests or for direct marketing.
            </p>
            <p>
              <strong>
                Rights in relation to automated decision making and profiling
              </strong>
            </p>
            <p>
              Automated decision-making takes place when an electronic system
              uses personal information to make a decision without human
              intervention. You have the right to question the outcome of
              automated decisions that may create legal effects or create a
              similar significant impact on you. We do not currently undertake
              automated decision making.
            </p>
            <p>&nbsp;</p>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
