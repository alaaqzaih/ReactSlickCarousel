import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import StarIcon from '@mui/icons-material/Star';
import { dataForReviews } from "../../data";
import '../../App.scss'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Card from "../Card/Card";


function Carousel() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    dotsClass: "button__bar",
    nextArrow: (
      <div>
        <div className="next-slick-arrow"> <ArrowForwardIosIcon sx={{ fontSize: "60px" }} /> </div>
      </div>
    ),
    prevArrow: (
      <div>
        <div className="prev-slick-arrow"> <ArrowBackIosNewIcon sx={{ fontSize: "60px" }} /> </div>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="App">
      <Slider {...settings}>
        {dataForReviews.map((item) => (
        <Card item = {item} />
        ))}
        <br />
      </Slider>
    </div>
  );
}
export default Carousel
