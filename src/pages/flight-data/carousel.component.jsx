import React, { Component } from 'react';
import Slider from 'react-slick';
import './carousel.style.css';

export default class Carousel extends Component {
  render() {
    const baseUrl = 'https://picsum.photos/seed';
    const postfixUrl = '600/300';
    const settings = {
      customPaging: function (i) {
        return <img src={`${baseUrl}/${i + 1}/${postfixUrl}`} alt="preview" />;
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
            <img src={baseUrl + `/1/${postfixUrl}`} alt="preview" />
          </div>
          <div>
            <img src={baseUrl + `/2/${postfixUrl}`} alt="preview" />
          </div>
          <div>
            <img src={baseUrl + `/3/${postfixUrl}`} alt="preview" />
          </div>
          <div>
            <img src={baseUrl + `/4/${postfixUrl}`} alt="preview" />
          </div>
        </Slider>
      </div>
    );
  }
}
