import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/movielists.css";
import scienceFiction from "../images/science-fiction.jpg";
import action from "../images/action.jpg";
import policier from "../images/policier.jpg";
import superHero from "../images/super-hero.jpg";
import guerre from "../images/guerre.jpg";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselCaption,
} from "reactstrap";

const items = [
  {
    source: action,
    altText: "Action",
    caption: "Action",
    link: "/matchroom/28",
    id: 28,
  },
  {
    source: scienceFiction,
    altText: "Science-Fiction",
    caption: "Science-Fiction",
    link: "/matchroom/878",
    id: 878,
  },
  {
    source: policier,
    altText: "Thriller",
    caption: "Thriller",
    link: "/matchroom/53",
    id: 53,
  },
  {
    source: superHero,
    altText: "Super héro",
    caption: "Super héro",
    link: "/matchroom/14",
    id: 14,
  },
  {
    source: guerre,
    altText: "Guerre",
    caption: "Guerre",
    link: "/matchroom/10752",
    id: 10752,
  },
];

/* Carousel */
/* Movies genre */
/* Click on the picture to select a genre and go to the next page */
const MovieLists = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const slides = items.map((item) => {
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
            className="clickable-list"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(${item.source})`,
            }}
          />
        </Link>
        {/* Link to the next page
                We added it for picture link and text to make both of them clickable */}
        <Link to={item.link}>
          <CarouselCaption
            captionText="choisir cette liste"
            captionHeader={item.caption}
          />
        </Link>
        <img src={item.source} alt={item.altText} />
      </CarouselItem>
    );
  });
  return (
    <div className="list-container">
      <h2>Choisissez une liste de films</h2>
      <h3 className="list-category">Par genre</h3>

      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </div>
  );
};

// To disable the automatic sliding of images
// See React Strap Carousel properties for more details: https://reactstrap.github.io/components/carousel/#app
Carousel.defaultProps = {
  interval: false,
};

export default MovieLists;
