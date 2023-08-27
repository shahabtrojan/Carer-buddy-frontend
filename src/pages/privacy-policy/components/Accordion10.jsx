import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Accordion10() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h5 style={{ fontSize: 18 }}>10. Use of 'cookies'</h5>
        </AccordionSummary>
        <AccordionDetails>
          <div style={{ display: "block" }}>
            <p>
              Like many other websites, this website uses ‘cookies’. ‘Cookie’ is
              a name for a small file, usually of letters and numbers, which is
              downloaded onto your device such as your computer, mobile phone or
              tablet. Cookies allow websites recognise your device so that the
              sites can work more efficiently, and also gather information about
              how you use the site.
            </p>
            <p>
              <strong>How do we use Cookies?</strong>
            </p>
            <p>
              We use Cookies to distinguish you from other users of our website.
              This helps us to provide you with a positive experience when you
              come to our website.
            </p>
            <p>
              <strong>The Cookies we use</strong>
            </p>
            <p>
              We use the categorisation set out by the International Chamber of
              Commerce in their UK Cookie Guide. We use all four categories of
              Cookies:
            </p>
            <ul>
              <li>
                Strictly necessary Cookies are essential for you to move around
                our website and use its features.
              </li>
              <li>
                Performance Cookies collect anonymous information about how you
                use our site, like which pages are visited most.
              </li>
              <li>
                Functionality Cookies collect anonymous information that
                remembers choices you make to improve your experience, like your
                text size or location. They may also be used to provide services
                you have asked for such as watching a video or commenting on a
                blog.
              </li>
              <li>
                Targeting or Advertising Cookies collect information about your
                browsing habits in order to make advertising relevant to you and
                your interests.
              </li>
            </ul>
            <p>
              Most web browsers allow some control of most cookies through the
              browser settings. To find out more about cookies, including how to
              see what cookies have been set, visit:{" "}
              <a
                href="http://www.aboutcookies.org"
                target="_blank"
                rel="noopener"
              >
                www.aboutcookies.org
              </a>{" "}
              or{" "}
              <a
                href="http://www.allaboutcookies.org"
                target="_blank"
                rel="noopener"
              >
                www.allaboutcookies.org
              </a>
            </p>
            <p>
              <strong>No Cookies, please</strong>
            </p>
            <p>
              You can opt-out of all our cookies (except the essential cookies).
              If you have any questions about how we use Cookies, please contact
              us.
            </p>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
