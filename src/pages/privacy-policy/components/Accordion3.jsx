import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Accordion3() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h5 style={{ fontSize: 18 }}>
            3. What type of information is collected from you?
          </h5>
        </AccordionSummary>
        <AccordionDetails>
          <div
            class="accordion-content clearfix"
            data-tab-content=""
            role="tabpanel"
            aria-labelledby="uf4qml-accordion-label"
            aria-hidden="false"
            id="uf4qml-accordion"
            style={{ display: "block" }}
          >
            <p>
              In order to carry out our work and to reach the charity’s
              objectives, we collect personal information about our volunteers,
              supporters, funders and service providers as well as the
              individuals and children (and their families) we support.
            </p>
            <p>This may include:</p>
            <ul>
              <li>
                Your name and contact details (including postal address, email
                address and telephone number).
              </li>
              <li>Your date of birth.</li>
              <li>If you volunteer for us</li>
              <li>
                If you have donated with us or make an ongoing donation, we may
                have records of previous support and donations
              </li>
              <li>
                If you attend our events, we may have records of events
                bookings, including volunteers, supporters and beneficiaries. We
                may hold an image of you in a photo or video to use on our
                website or in other fundraising and marketing materials to
                promote the charity.
              </li>
              <li>
                A photo will be necessary for staff and volunteers to be used
                for DBS and right to work checks.
              </li>
              <li>
                Your bank or credit card details if you work with us in order to
                pay your salary. Your card information is not held by us, it is
                collected by our third-party payment processors, who specialize
                in securing your information and processing of debit/credit card
                transactions.
              </li>
              <li>
                Any other personal information that may be shared with us and
                information to assist us in providing our services.
              </li>
              <li>
                If you use one of our services we may collect information such
                as your Nationality, Religious or philosophical beliefs, sexual
                orientation, health conditions or disabilities, information
                about you and your circumstances, relevant health and safety
                concerns, your needs and wishes.
              </li>
            </ul>
            <p>
              Data protection laws recognise certain categories of personal
              information as sensitive or ‘special categories of data’ and
              therefore requiring greater protection, for example, information
              about your health, religion, or sexual orientation.
            </p>
            <p>
              In the nature of what our charity does, we actively collect
              special category data from beneficiaries to achieve the objectives
              of the charity and to provide the help and support we give. Such
              data is collected with only your explicit Consent and/parent or
              guardian Explicit Consent is handled with great care. Exemptions
              may apply to certain data in order for the charity to carry on
              offering help and support to services users for health and social
              care purposes.
            </p>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
