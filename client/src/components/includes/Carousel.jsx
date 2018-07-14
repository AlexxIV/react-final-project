import React from 'react';
import { CarouselProvider, Slider, Slide, Dot, Image, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import '../../styles/includes/carousel.scss';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
      <h2 className="carousel-title">Featured hotels</h2>
      <CarouselProvider
        naturalSlideWidth={2}
        naturalSlideHeight={1}
        totalSlides={3}
        isPlaying={true}
        interval={5000}
        dragEnabled={false}
        hasMasterSpinner={true}
      >
      <Slider
      className={'carousel-slider-wrapper'}
      >
        {this.props.latestHotels.map((hotel, index) => 
       <Slide key={index} index={index}>
        <Image 
          src={hotel.imageUrl}
          />
       </Slide>
          )}
          </Slider> 
      </CarouselProvider>
      </div>
    );
  }
}
