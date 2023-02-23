import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import StarIcon from '@mui/icons-material/Star';
import { dataForReviews } from "../../data";
import '../../App.scss'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Carousel() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    dotsClass: "button__bar",
    nextArrow: (
      <div>
        <div className="next-slick-arrow"> <ArrowForwardIosIcon sx={{ fontSize: "80px" }} /> </div>
      </div>
    ),
    prevArrow: (
      <div>
        <div className="prev-slick-arrow"> <ArrowBackIosNewIcon sx={{ fontSize: "80px" }} /> </div>
      </div>
    ),


    initialSlide: 0,
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
          <div className="card">
            <div className="card-top">
              <div className="image">
                <img src='https://www.colorbook.io/imagecreator.php?hex=FF6900&width=1920&height=1080' />
              </div>
              <h1>{item.name}</h1>
            </div>
            <br />

            <div className="stars">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
            <div className="review-content">
              <p>{item.review}</p>
            </div>
          </div>
        ))}
        <br />
      </Slider>
    </div>
  );
}

export default Carousel
