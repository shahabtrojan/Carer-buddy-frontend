import React from "react";

function WhoWeHelp() {
  return (
    <div className="container" style={{ minHeight: "70vh", padding: 2 }}>
      <div className="row mt-5">
        <div className="col-md-6 welcome__paragraph">
          <h1 className="">
            Welcome to Carers’ Support East Kent, a charity that provides Carers
            with the information and support they need.
          </h1>
          <h2>Who we help</h2>
          <p>
            You may not think of yourself as a Carer, but our services are
            available to you if you look after a relative or friend, who due to
            physical or mental illness, age-related difficulties, disability, or
            an addiction, cannot manage without your support.
          </p>
        </div>
        <div className="col-md-6 front_page_news_event">
          <img
            src="https://carersek.org.uk/wp-content/uploads/2023/07/Screenshot-2023-07-20-093652.png"
            alt="img"
          />
          <h3>
            <a>Carers’ News – July Edition</a>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default WhoWeHelp;
