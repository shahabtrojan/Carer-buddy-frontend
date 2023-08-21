import React from "react";
import HowWeHelpCards from "./HowWeHelpCards";

function HowWeHelp() {
  return (
    <div className="how__we__help">
      <div
        className="container"
        style={{ minHeight: "70vh", padding: "50px 2px 50px 2px" }}
      >
        <h2 style={{ textAlign: "center" }}>How we help</h2>
        <p style={{ textAlign: "center" }}>
          We provide information, support and signposting to services by phone,
          email, online, text and in person.
        </p>

        <div className="row">
          <HowWeHelpCards
            backgroundColor="#00b4ea"
            iconLink="https://carersek.org.uk/wp-content/uploads/2020/05/icon_information.png"
            title="Information"
            description="Find out about services available to Carers, benefits and rights."
          />
          <HowWeHelpCards
            backgroundColor="#28397a"
            iconLink="https://carersek.org.uk/wp-content/uploads/2020/05/icon_support.png"
            title="Support"
            description="A listening ear, drop-ins, support groups, social activities and training workshops."
          />

          <HowWeHelpCards
            backgroundColor="#00b4ea"
            iconLink="https://carersek.org.uk/wp-content/uploads/2020/05/icon_careerneeds.png"
            title="Carer’s Needs Assessment"
            description="To identify and access the support you need as a Carer."
          />

          <HowWeHelpCards
            backgroundColor="#28397a"
            iconLink="https://carersek.org.uk/wp-content/uploads/2020/05/icon_emergencycard.png"
            title="Kent Carer’s Emergency Card"
            description="Peace of mind when you are away from the person you look after."
          />
          <HowWeHelpCards
            backgroundColor="#00b4ea"
            iconLink="https://carersek.org.uk/wp-content/uploads/2020/05/icon_hospitalservice.png"
            title="Carers’ Hospital Service"
            description="At QEQM, William Harvey and Kent & Canterbury Hospitals."
          />

          <HowWeHelpCards
            backgroundColor="#28397a"
            iconLink="https://carersek.org.uk/wp-content/uploads/2020/05/icon_youngadultcarer.png"
            title="Young Adult Carer Service"
            description="A dedicated team for 16-24 year old Carers."
          />
        </div>

        <div className="mt-5 w-100 d-flex justify-content-center align-items-center">
          <button className="btn btn-warning">Get Support</button>
        </div>
      </div>
    </div>
  );
}

export default HowWeHelp;
