import React from 'react';
import Slider from 'react-slick';
import './image-carousel.styles.scss';

import ElectricalGrid from '../../assets/images/electrical-grid.jpg';
import PowerLines from '../../assets/images/power-lines.jpg';
import Cable from '../../assets/images/cable.jpg';

const ImageCarousel = () => {
  const listImg = [ElectricalGrid, PowerLines, Cable];
  const settings = {
    customPaging: function (i) {
      return <img src={listImg[i]} alt="preview" />;
    },
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <img src={ElectricalGrid} alt="preview" />
        </div>
        <div>
          <img src={PowerLines} alt="preview" />
        </div>
        <div>
          <img src={Cable} alt="preview" />
        </div>
      </Slider>
    </div>
  );
};

export default ImageCarousel;
