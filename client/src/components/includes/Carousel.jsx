import React from 'react';
import { CarouselProvider, Slider, Slide, Dot, Image, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import '../../styles/includes/carousel.scss';

export default class Carousel extends React.Component {
  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={1}
        naturalSlideHeight={1}
        totalSlides={3}
        // isPlaying={true}
        interval={5000}
        dragEnabled={false}
      >        
        <Slider>
          {/* {this.props.hotels.map((hotel, index) => <Slide className="custom-carousel-slide" index={index} key={index}><Hotel hotel={hotel} /> </Slide>)} */}
          {/* <Slide index={0}></Slide> */}
        </Slider>
        {/* <DotGroup /> */}
      </CarouselProvider>
    );
  }
}
