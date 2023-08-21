import React from "react";
import InfoGraphicBoxesCards from "./InfoGraphicBoxesCards";

function InfoGraphicBoxes() {
  return (
    <div style={{ backgroundColor: "#d6f3fc" }}>
      <div className="container">
        <div className="row">
          <InfoGraphicBoxesCards
            imgLink="https://carersek.org.uk/wp-content/uploads/2020/05/1in9_carers.png"
            heading1="1 in 9 people"
            heading2="in Kent"
            heading3="are Carers"
          />
          <InfoGraphicBoxesCards
            imgLink="https://carersek.org.uk/wp-content/uploads/2020/05/caring_will_affect.png"
            heading1="Caring will"
            heading2="affect us all"
            heading3="at some point in our lives"
          />
          <InfoGraphicBoxesCards
            imgLink="https://carersek.org.uk/wp-content/uploads/2020/05/look_after.png"
            heading1="If you’re a Carer,
            looking after your own"
            heading2="health and well-"
            heading3="being is important"
          />
        </div>
      </div>
    </div>
  );
}

export default InfoGraphicBoxes;
