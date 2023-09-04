import React from "react";
import { Link } from "react-router-dom";

function PrivacyNotice() {
  return (
    <div style={{ backgroundColor: "#d6f3fc", padding: "10px 0px" }}>
      <div className="container" style={{ minHeight: "70vh" }}>
        <div className="row mt-5 d-flex justify-content-between">
          <div className="col-12">
            <h2>Privacy Notice</h2>
            <p style={{ marginBottom: 25, fontSize: 20 }}>
              This explains when and why we collect personal information about
              you, how we use it and the conditions under which we may disclose
              it to others. Your personal data is defined as any information
              that can directly or indirectly identify you. This notice also
              explains how we keep your data safe and secure and includes
              information you need to know about your rights and how to exercise
              them. A copy of our privacy notice can be viewed here:
              <Link to="https://carersek.org.uk/about-2/policies/privacy-policy/">
                https://carersek.org.uk/about-2/policies/privacy-policy/
              </Link>
            </p>

            <p style={{ marginBottom: 25, fontSize: 20 }}>
              Ts & Cs On the CSEK app, the privacy of our users is of great
              importance to us. These terms and conditions in conjunction with
              our privacy notice have been compiled to better serve those who
              are concerned with how their Personally identifiable information
              (PII) is being used online.
            </p>
            <p style={{ marginBottom: 25, fontSize: 20 }}>
              PII is information that can be used on its own or with other
              information to identify, contact, or locate a single person, or to
              identify an individual in context. Please read our privacy notice
              (
              <Link to="https://carersek.org.uk/about-2/policies/privacy-policy/">
                https://carersek.org.uk/about-2/policies/privacy-policy/
              </Link>
              ) carefully to get a clear understanding of how we collect, use,
              protect or otherwise handle your Personally Identifiable
              Information in accordance with our app.
            </p>
            {/* <p style={{ marginBottom: 25, fontSize: 20 }}>
              <strong>Email us:</strong>{" "}
              <Link
                style={{
                  llineHeight: "inherit",
                  color: "#00b4ea",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
                to={"/"}
              >
                {" "}
                dataprotection@carersek.org.uk
              </Link>
            </p>
            <p style={{ marginBottom: 25, fontSize: 20 }}>
              Telephone: 0300 302 0061
            </p>
            <p style={{ marginBottom: 25, fontSize: 20 }}>
              Write to us: Data Protection Officer, Innovation House, Discovery
              Park, Ramsgate Road, Sandwich, Kent CT13 9ND
            </p>
            <p style={{ marginBottom: 25, fontSize: 20 }}>
              If you are unhappy with the way we process your data, you can also
              make a complaint to the Information Commissioner’s Office (ICO)
              which regulates the use of information in the UK. They can be
              contacted by:
            </p>
            <p style={{ marginBottom: 25, fontSize: 20 }}>
              <strong>Telephone the ICO:</strong> 0303 123 1113
            </p>
            <p style={{ marginBottom: 25, fontSize: 20 }}>
              Write to the ICO: Information Commissioner’s Office, Wycliffe
              House, Water Lane, Wilmslow, Cheshire, SK9 5AF
            </p>
            <p style={{ marginBottom: 25, fontSize: 20 }}>
              <strong>Or by going online to:</strong>{" "}
              <Link
                style={{
                  llineHeight: "inherit",
                  color: "#00b4ea",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
                to={"/"}
              >
                {" "}
                www.ico.org.uk/concerns
              </Link>
            </p>
            <p style={{ marginBottom: 25, fontSize: 20 }}>
              If you are based outside of the UK, the complaint should be
              directed to the relevant Data Protection Supervisory Authority in
              that Country.
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyNotice;
