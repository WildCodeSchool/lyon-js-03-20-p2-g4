import React from 'react';
import '../styles/Drawer.css';
import listAction from './listAction.json';

const Drawer = () => {
  const voteAverage = (Math.round((listAction.results[0].vote_average / 2) * 10) / 10);
  const stars = [];
  const starsDisplay = (rating) => {
    for (let i = 0; i < 5; i++) {
      if (rating >= 1) {
        stars.push(1);
      } else if (rating > 0 && rating < 1) {
        stars.push(0.5);
      } else {
        stars.push(0);
      }
      rating -= 1;
    }
    console.log(stars);
    return stars;
  };

  const getStars = starsDisplay(voteAverage);

  return (
    <div className='drawer-container'>
      <div className='drawer-overlay' />
      <div className='drawer-movie-info-container'>
        <div className='drawer-movie-banner'>
          <span className='drawer-close' />
        </div>
        <div className='drawer-link-rating'>
          <a href='#'>
            <div className='button'>
              <span className='drawer-play-icon' />
                            Bande annonce
            </div>
          </a>
          <div className='drawer-rating-container'>
            {getStars.map(star => {
              if (star === 1) {
                return <span className='star full' />;
              } else if (star === 0.5) {
                return <span className='star half' />;
              } else {
                return <span className='star empty' />;
              }
            })}
            <span className='global-rating'>{`${voteAverage}/5`}</span>
          </div>
        </div>
        <div className='drawer-movie-info-container'>
          <h2>[movie_name]</h2>
          <span>De [realisateur] - [genre] - [durée] - [release]</span>
          <p>[résumé]</p>
        </div>
        <div className='drawer-movie-casting'>
          <div className='drawer-actor-container'>
            <img src='#' alt='[actor name]' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
