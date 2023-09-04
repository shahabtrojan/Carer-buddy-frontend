import React from "react";
import BasicAccordion from "./Accordion";
import Accordion2 from "./Accordion2";
import Accordion3 from "./Accordion3";
import Accordion4 from "./Accordion4";
import InfoGraphicBoxes from "../../home-pages/components/InfoGraphicBoxes";
import Accordion6 from "./Accordion6";
import Accordion7 from "./Accordion7";
import Accordion8 from "./Accordion8";
import Accordion10 from "./Accordion10";
import BasicAccordionWithQuestion from "./BasicAccordionWithQuestion";

function AccordionList() {
  return (
    <div style={{ backgroundColor: "#d6f3fc" }}>
      <div className="container pt-3 accordions">
        {/* <BasicAccordion
          title="1. Who we are?"
          bodyList={[
            "We are Carers’ Support East Kent and for the purposes of UK Data Protection Law we are registered as a Data Controller under registration number Z2453970. Carers Support East Kent offers a wide range of support services to provide Carers with the information and support they need.",
            "You may not think of yourself as a Carer, but our services are available to you if you look after a relative or friend, who due to physical or mental illness, age-related difficulties, disability, or an addiction, cannot manage without our support.",
            "In this Notice, Carers’ Support East Kent ‘we’, ‘us’, ‘our’ means: Carers’ Support East Kent (CSEK), Charity registration number: 1136904, Company registration number: 7213672, ICO number: Z2453970, Location and Registered address: Innovation House, Discovery Park, Ramsgate Road, Sandwich, Kent CT13 9ND.",
          ]}
        />
        <Accordion2 />
        <Accordion3 />
        <Accordion4 />
        <BasicAccordion
          title="5.	How long is your information kept for?"
          bodyList={[
            "We keep your information for no longer than is necessary for the purposes it was collected for. The length of time we keep your information for is determined upon our legal, contractual, and operational considerations. For example, we are contractually obligated to keep Carer assessment forms and all other documents linked to services delivered for 7 years after the service contract end date.",
            "An example where we are legally required to hold certain types of information to fulfil our statutory and regulatory obligations would be from Employment law, Health and Safety and tax/accounting purposes.",
            "We review our retention periods on a regular basis and update our Records of Processing Activities (RoPAs) accordingly. If you would like to know more about how long we hold your personal information for, please email: dataprotection@carersek.org.uk",
          ]}
        />
        <Accordion6 />
        <Accordion7 />
        <Accordion8 />
        <BasicAccordion
          title="9.	Keeping your information safe"
          bodyList={[
            "We take looking after your information very seriously. We have implemented appropriate physical, technical and organisational measures to ensure that your personal information is secure when under our control, both on and offline, from improper access, use, alteration, destruction, and loss.",
            "Any sensitive information (such as your credit or debit card details or any information that is classed as sensitive or ‘special category data’) is encrypted and protected. All debit and credit card details are passed securely to our payment processing partner, according to the Payment Card Industry Security Standards.",
            "Our websites may contain links to other sites. While we try to link only to sites that share our high standards and respect for privacy, we are not responsible for the content or the privacy practices employed by other sites. Please be aware that advertisers or websites that have links on our site may collect personally identifiable information about you. This Privacy Notice does not cover the information practices of those websites or advertisers.",
          ]}
        />
        <Accordion10 />
        <BasicAccordion
          title="11.	Transferring your information outside of the United Kingdom"
          bodyList={[
            "When data is transferred outside of the UK, appropriate safeguards, and standard contractual clauses (SCC) are in place to ensure adequate levels of security and are in line with data protection laws. Your data is normally processed within the UK but may on occasion be processed outside of the UK.",
            "All processing is secure, and agreements exist between us and the data processors to safeguard and secure your information. All non-UK processing may take place within the European Union, or Outside of the European Union.",
          ]}
        />
        <BasicAccordion
          title="12.	Changes to this notice"
          bodyList={[
            "Any changes we may make to this policy in the future will be posted on this website so please check this page occasionally to ensure that you’re happy with any changes. If we make any significant changes, we’ll make this clear on our website or we may contact you.",
          ]}
        />
        <BasicAccordion
          title="13.	Review of this notice"
          bodyList={[
            "We keep this policy under regular review. This notice was last updated September 2022.",
          ]}
        /> */}
        <BasicAccordionWithQuestion
          title="1) What personal information do we collect from the people that visit our app?"
          body="When registering on our app, as appropriate, you may be asked to enter your Name, Age, Location,  or other details to help you with your experience."
        />
        <BasicAccordionWithQuestion
          title="2)When do we collect information?"
          body="We collect information from you when you register on our app."
        />
        <BasicAccordionWithQuestion
          title="3)How do we use your information?"
          body="We use the information to help you match with the right person."
        />
        <BasicAccordionWithQuestion
          title="4)How do we protect visitor information?"
          body="We do not use vulnerability scanning and/or scanning to Payment Card Industry standards."
        />
        <div className="mb-5 pb-3" />

        <InfoGraphicBoxes />
      </div>
    </div>
  );
}

export default AccordionList;
