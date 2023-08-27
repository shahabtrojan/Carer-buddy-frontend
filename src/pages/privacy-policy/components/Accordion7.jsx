import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Accordion7() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h5 style={{ fontSize: 18 }}>7. Lawful Processing</h5>
        </AccordionSummary>
        <AccordionDetails>
          <div style={{ display: "block" }}>
            <p>
              Data protection law requires us to rely on one or more lawful
              basis for processing your personal information. Please see the
              following lawful grounds we use and believe are relevant and
              lawful under data protection laws:
            </p>
            <p>
              <strong>Specific and informed Consent </strong>
            </p>
            <p>
              Where you have provided your consent to use your personal
              information for a certain purpose, for example:
            </p>
            <ul>
              <li>to provide beneficiaries with help and support.</li>
              <li>
                to participate in a project such as research purposes for the
                charity.
              </li>
              <li>to process a form you fill in on our website.</li>
              <li>to send you marketing email communications.</li>
              <li>
                to use a photo or video to promote our charitable purposes
              </li>
            </ul>
            <p>
              <strong>Legitimate Interests</strong>
            </p>
            <p>
              Where it is necessary to achieve our and others’ objectives as a
              charity with good reason as long as we can demonstrate that the
              use is fair and with your reasonable expectations. This might
              include but is not limited to:
            </p>
            <ul>
              <li>
                send you communications through the post which we believe might
                be of interest to you.
              </li>
              <li>
                personalise, enhance, modify and improve our services and
                communications to you to benefit our customers.
              </li>
              <li>
                understand how people interact with our website, the
                effectiveness of our services, our promotional marketing
                campaigns, and our advertising
              </li>
            </ul>
            <p>
              Whenever we use Legitimate Interest to process data, we perform a
              Legitimate Intertest Balancing Assessment (LIA) to enable us to
              consider any potential impact on you (both positive and negative),
              and your rights under data protection laws. Your information will
              not be processed if our interests as a charity override your
              fundamental rights and freedoms according to the law.
            </p>
            <p>
              <strong>Legal Obligation</strong>
            </p>
            <p>
              We will use this condition to process personal information where
              we are required by law, such as to process information about
              employees.
            </p>
            <p>
              <strong>Performance of a contract</strong>
            </p>
            <p>
              Where we are entering into a contract with you, for example where
              you purchase a ticket and attended to an event we have organised.
            </p>
            <p>
              <strong>Vital Interests</strong>
            </p>
            <p>
              Where it is necessary to protect your life or your health. An
              example would be in the case of a medical emergency by an
              individual attending one of our events.
            </p>
            <p>
              <strong>Post</strong>
            </p>
            <p>
              We may use our Legitimate Interest to send you marketing
              communications by post. If you prefer not to hear from us this
              way, please get in contact and let us know by any of the contact
              details listed in the ‘Your Choices’ section below.
            </p>
            <p>
              <strong>Phone/Email/Text</strong>
            </p>
            <p>
              If you have provided us with your telephone number or email
              address, for example, when you contacted us directly and expressed
              interest in our charity, we may get in contact with you via phone,
              email, or text to provide you with further information about our
              services. If the nature of your enquiry relates to marketing, we
              will ask for your consent to continue to process your data.
            </p>
            <p>
              <strong>Marketing Communications</strong>
            </p>
            <p>
              We will only send you fundraising and marketing communications by
              email, text and telephone if you have explicitly provided your
              consent. You may opt-out of our fundraising and marketing
              communications at any time by clicking the unsubscribe link at the
              end of our fundraising and marketing emails. Alternatively, you
              can get in touch via any of the contact details listed in the
              ‘Your Choices’ section below. Your contact details may be used to
              provide you with information about our newsletter, or other
              marketing campaigns.
            </p>
            <p>
              When you give us consent to receive fundraising and marketing
              communications, we will monitor consent and ensure that you still
              wish to receive such communications by occasionally reaffirming
              your consent with us. Our approach is designed to uphold your
              privacy and information rights, to respect your choices, and to
              ensure we are not intrusive.
            </p>
            <p>
              <strong>Your Choices</strong>
            </p>
            <p>
              We respect and value your choices. You have a choice whether or
              not you wish to receive information from us and we are committed
              to putting you in control of your data. You are free to change
              your marketing preferences at any time, including if you do not
              want to receive further contact in regard to marketing purposes.
              Please contact us and we will be sure to amend your preferences:
            </p>
            <p>
              Email us:{" "}
              <a
                href="mailto:dataprotection@Carersek.org.uk"
                target="_blank"
                rel="noopener"
              >
                dataprotection@Carersek.org.uk
              </a>
            </p>
            <p>Telephone us: 0300 302 0061</p>
            <p>
              Write to us: Data Protection Enquiry, Innovation House, Discovery
              Park, Ramsgate Road, Sandwich, Kent CT13 9ND
            </p>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
