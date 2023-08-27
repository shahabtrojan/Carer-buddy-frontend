import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Accordion2() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h5 style={{ fontSize: 18 }}>
            2. How do we collect information from you?
          </h5>
        </AccordionSummary>
        <AccordionDetails>
          <div style={{ display: "block" }}>
            <p>
              <strong>Information you give us directly</strong>
            </p>
            <p style={{ fontWeight: "500" }}>
              For example, we may obtain information about you when you enquire
              to receive help and support from us, if you make a referral to us
              by phone, email, text, on our website and in person, if you attend
              one of our events, when you apply to work with us, if you
              volunteer for us, or if you are employed by us, or if you make a
              one time or recurring donation, or if you fundraise for us.
            </p>
            <p style={{ fontWeight: "500" }}>
              We may occasionally collect information when it is available
              publicly from external sources and may help us to provide a better
              service or raise funds to continue our work.
            </p>
            <p>
              <strong>When you visit this website </strong>
            </p>
            <p style={{ fontWeight: "500" }}>
              We may, like many organisations, automatically collect the
              following information when you visit our website:
            </p>
            <p style={{ fontWeight: "500" }}>
              Technical information, including the type of device you’re using,
              your IP address, domain name, the date and time of your visit, the
              pages you accessed, documents you downloaded, the previous website
              you have visited and type of browser you are using.
            </p>
            <p style={{ fontWeight: "500" }}>
              Personal information may be collected through our website when you
              use the following website services: call me back button; contact
              us links; consultations; donations page; forms; shopping page; and
              social media pages including our website, Facebook and Twitter.
            </p>
            <p style={{ fontWeight: "500" }}>
              We collect and use your personal information by using cookies on
              our website – more information on cookies can be found under ‘the
              use of cookies’ section below. Wherever we use non-essential
              cookies we will request your Consent.
            </p>
            <p>
              <strong>Social Media </strong>
            </p>
            <p style={{ fontWeight: "500" }}>
              When you interact with us on social media platforms such as
              Facebook and Twitter, we may obtain information about you (for
              example, when you publicly tag us in an event photo). The
              information we receive will depend on the privacy preferences you
              have set on those types of platforms.
            </p>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
