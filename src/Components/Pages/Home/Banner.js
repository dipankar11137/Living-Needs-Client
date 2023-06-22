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
      <div div className="relative  w-full">
        <img
          className="object-fill sliderImg  w-full rounded-2xl"
          src="https://www.wallsauce.com/uploads/wallsauce-com/images/thumbs/600/adac0cf85bba824e9f6b9a320a6505929330c6a9_800__R_N_90.jpg"
          alt=""
        />
      </div>
      <div div className="relative    w-full  ">
        <img
          className="object-fill sliderImg   w-full  rounded-2xl"
          src="https://s.yimg.com/ny/api/res/1.2/pnfJx2OIxIpK0R11Dbf48Q--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQ2MA--/https://media.zenfs.com/en/house_beautiful_336/489e7828ccb639b5846dea9fe8c4f445"
          alt=""
        />
      </div>
      <div div className="relative   w-full  ">
        <img
          className="object-fill sliderImg   w-full  rounded-2xl"
          src="https://images.squarespace-cdn.com/content/v1/5d13d68c02222100019644ff/1631638802745-YAX1FXF1PUEY2LCCKMO3/celeste-jackson-interiors-barrinton-il-wallpaper-white-and-blue-designed-wallpaper-in-modern-bedroom.png"
          alt=""
        />
      </div>
    </Slider>
  );
};

export default Banner;
