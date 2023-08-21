import React from "react";

function SectionWithImageAndInfo({ className, title, description, imgLink }) {
  return (
    <div className="container" style={{ minHeight: "70vh" }}>
      <div className="row mt-5 d-flex justify-content-between">
        <div className="col-md-5">
          <h2>{title}</h2>
          <p>{description}</p>
          <div className="mt-2">
            <button className="btn btn-warning">Get Started</button>
          </div>
        </div>
        <div className="col-md-5 d-flex justify-content-center align-items-center">
          <img style={{ width: "100%" }} alt="img" src={imgLink} />
        </div>
      </div>
    </div>
  );
}

export default SectionWithImageAndInfo;
