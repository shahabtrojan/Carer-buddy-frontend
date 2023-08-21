import React from "react";
import Carousel from "./components/Carousel";
import WhoWeHelp from "./components/WhoWeHelp";
import HowWeHelp from "./components/HowWeHelp";
import "../../styles/home-page.css";
import SectionWithImageAndInfo from "./components/SectionWithImageAndInfo";
import Professionals from "./components/Professionals";
import InfoGraphicBoxes from "./components/InfoGraphicBoxes";
import NavBar from "./components/NavBar";

function HomePage() {
  return (
    <div className="app__wrapper">
      {/* <NavBar /> */}
      <Carousel />
      <WhoWeHelp />
      <HowWeHelp />
      <SectionWithImageAndInfo
        title="Carers"
        description="If you look after a relative or friend who could not manage without you, we can provide the information and support you need by phone, email, online, text and in person."
        imgLink="https://carersek.org.uk/wp-content/uploads/2020/05/bigstock-An-Adult-Hipster-Son-With-His-243618967.jpg"
      />
      <Professionals />
      <SectionWithImageAndInfo
        title="Get involved"
        description="There are many ways you can get involved with us. Volunteer, become a trustee, join our staff team, support us with fundraising or feedback about our services."
        imgLink="https://carersek.org.uk/wp-content/uploads/2020/05/bigstock-Disability-a-disabled-child-in-110441000.jpg"
      />
      <InfoGraphicBoxes />
    </div>
  );
}

export default HomePage;
