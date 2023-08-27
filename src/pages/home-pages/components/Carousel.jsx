import React, { useEffect, useState } from "react";
import { IconButton, Stack } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "../../../styles/carousel.css";

const imageList = [
  {
    label: "I can’t put into words the difference the support has made",
    image:
      "https://carersek.org.uk/wp-content/uploads/2020/05/shutterstock_1185007444.jpg",
  },
  {
    label: "Meeting other Young Adult Carers was amazing",
    image:
      "https://carersek.org.uk/wp-content/uploads/2020/05/mum-and-daughter-shutterstock_261469550-scaled-e1590515247415.jpg",
  },
  {
    label: "You absolutely went that extra mile and did all you could to help",
    image:
      "https://carersek.org.uk/wp-content/uploads/2020/05/shutterstock_366828335-e1660562200892.jpg",
  },
  {
    label: "It’s nice to know I’m not alone as a Carer",
    image:
      "https://carersek.org.uk/wp-content/uploads/2020/05/shutterstock_453160732.jpg",
  },
];
function Carousel() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleChangeImage = (value, inderval) => {
    if (value === imageList.length) {
      value = 0;
    } else if (value <= 0) {
      value = imageList.length - 1;
    }
    setSelectedIndex(value);
  };

  // useEffect(() => {
  //   let intervalId = setInterval(() => {
  //     handleChangeImage(selectedIndex + 1, intervalId);
  //   }, 10000);
  // }, [selectedIndex]);

  return (
    <Stack sx={{ background: imageList[selectedIndex], position: "relative" }}>
      <IconButton
        className="carousel__btn"
        sx={{
          position: "absolute",
          top: "60%",
          left: 10,
          color: "white",
        }}
        onClick={() => handleChangeImage(selectedIndex - 1)}
      >
        <ArrowBackIcon sx={{ fontSize: 40 }} />
      </IconButton>
      <IconButton
        className="carousel__btn"
        sx={{
          position: "absolute",
          top: "60%",
          right: 10,
          color: "white",
        }}
        onClick={() => handleChangeImage(selectedIndex + 1)}
      >
        <ArrowForwardIcon sx={{ fontSize: 40 }} />
      </IconButton>
      <div
        style={{
          position: "absolute",
          top: "70%",
          left: "10%",
          width: "70%",
        }}
      >
        <h1
          style={{
            display: "inline",
            padding: 10,
            lineHeight: 1.8,
            color: "white",
            backgroundColor: "#28397a",
            opacity: 0.8,
          }}
          className="image__text"
        >
          {imageList[selectedIndex].label}
        </h1>
      </div>
      <img
        className="carousel__img"
        alt="img"
        src={imageList[selectedIndex].image}
      />
    </Stack>
  );
}

export default Carousel;
