import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/movielists.css';
import genres from './genre.js';
import people from './people.js';
import decades from './decades.js';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselCaption
} from 'reactstrap';

/* Carousel */
/* Movies genre */
/* Click on the picture to select a genre and go to the next page */
const MovieLists = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  let type = [];
  if (props.type === 'genres') {
    type = genres;
  } else if (props.type === 'people') {
    type = people;
  } else if (props.type === 'decades') {
    type = decades;
  }

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === type.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? type.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  let CarouselType = '';
  if (props.type === 'genres') {
    CarouselType = 'Genre';
  } else if (props.type === 'people') {
    CarouselType = 'Personnalité';
  } else if (props.type === 'decades') {
    CarouselType = 'Périodes';
  }

  const slides = type.map((item) => {
    return (
      /* Displaying each carousel Item */
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.source}
      >
        {/* Link to the next page */}
        <Link to={item.link}>
          <div
            className='clickable-list'
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(${item.source})`
            }}
          />
        </Link>
        {/* Link to the next page
                We added it for picture link and text to make both of them clickable */}
        <Link to={item.link}>
          <CarouselCaption
            captionText='choisir cette liste'
            captionHeader={item.caption}
          />
        </Link>
        <img src={item.source} alt={item.altText} />
      </CarouselItem>
    );
  });
  return (
    <div className='list-container'>
      <h3 className='list-category'>{CarouselType}</h3>

      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        {slides}
        <CarouselControl
          direction='prev'
          directionText='Previous'
          onClickHandler={previous}
        />
        <CarouselControl
          direction='next'
          directionText='Next'
          onClickHandler={next}
        />
      </Carousel>
    </div>
  );
};

// To disable the automatic sliding of images
// See React Strap Carousel properties for more details: https://reactstrap.github.io/components/carousel/#app
Carousel.defaultProps = {
  interval: false
};

export default MovieLists;
