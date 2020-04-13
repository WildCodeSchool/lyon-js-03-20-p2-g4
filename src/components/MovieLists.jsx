import React, { useState } from 'react';
import '../styles/movielists.css';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    source: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/cJ0wqaQ9KPzs3fROXUuaWgRg9Pj.jpg',
    altText: 'Ad Astra',
    caption: 'Ad Astra'
  }
  ,
  {
    source: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/6VRhjfA495M6viOPL4aF1cIlGfE.jpg',
    altText: 'Bloodshot',
    caption: 'Bloodshot'
  }
];

const MovieLists = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.source}
      >
        <img src={item.source} alt={item.altText} />
        <CarouselCaption captionHeader={item.caption} />
      </CarouselItem>
    );
  });
  return (
    <div className='list-container'>
      <h2>Choisissez une liste de films</h2>
      <h3 className='list-category'>Par genre</h3>

      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>

    </div>

  );
}

// To desable the automatic sliding of images
Carousel.defaultProps = {
  interval: false
};

export default MovieLists;
