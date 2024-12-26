import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import '../../CSS/Banner.css';
import '../../CSS/PicStyle.css';

const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: 'linear',
    pauseOnHover: true,
    fade: true,
  };
  return (
    <Slider className="pt-1" {...settings}>
      <div div className="relative    w-full  ">
        <img
          className="object-fill sliderImg   w-full  rounded-2xl"
          src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/furniture-banner-ads-design-template-ae02697c1be1b28f35e46d0c45833d5c_screen.jpg?ts=1663318497"
          alt=""
        />
      </div>
      <div div className="relative   w-full  ">
        <img
          className="object-fill sliderImg   w-full  rounded-2xl"
          src="https://i.pinimg.com/1200x/4f/37/4e/4f374ee8d76bb27c6b745254e39973f5.jpg"
          alt=""
        />
      </div>
      <div div className="relative  w-full">
        <img
          className="object-fill sliderImg  w-full rounded-2xl"
          src="https://img.freepik.com/premium-psd/furniture-sale-web-banner-template_120329-2309.jpg"
          alt=""
        />
      </div>
    </Slider>
  );
};

export default Banner;
