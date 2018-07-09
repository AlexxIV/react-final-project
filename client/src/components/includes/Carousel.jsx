import React from 'react';
import { CarouselProvider, Slider, Slide, Dot, Image, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default class Carousel extends React.Component {
  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={50}
        naturalSlideHeight={25}
        totalSlides={3}
        //isPlaying={true}
        interval={1000}
      >        
        <Slider>
          <Slide index={0}><Image src={"https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}/></Slide>
          <Slide index={1}>I am the second Slide.</Slide>
          <Slide index={2}>I am the third Slide.</Slide>
        </Slider>
        <Dot />
      </CarouselProvider>
    );
  }
}