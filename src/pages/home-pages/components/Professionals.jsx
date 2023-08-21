import React from "react";

function Professionals() {
  return (
    <div style={{ backgroundColor: "#d6f3fc",padding:'10px 0px' }}>
      <div className="container" style={{ minHeight: "70vh" }}>
        <div className="row mt-5 d-flex justify-content-between">
          <div className="col-md-5 d-flex justify-content-center align-items-center">
            <img
              style={{ width: "100%" }}
              alt="img"
              src="https://carersek.org.uk/wp-content/uploads/2020/05/bigstock-210302557.jpg"
            />
          </div>
          <div className="col-md-5">
            <h2>Professionals</h2>
            <p>
              If you look after a relative or friend who could not manage
              without you, we can provide the information and support you need
              by phone, email, online, text and in person.
            </p>
            <div className="mt-2">
              <button className="btn btn-warning">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Professionals;
