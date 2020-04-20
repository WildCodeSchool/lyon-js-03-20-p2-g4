import React from 'react';
import listAction from './listAction.json';
import '../styles/FilmCard.css';

function FilmCard () {
  console.log(listAction.results[0].poster_path);
  const posterPath = listAction.results[0].poster_path;
  return (
    <div className='film-card-container' style={{ backgroundImage: `url(http://image.tmdb.org/t/p/w342/${ posterPath })` }} />
  );
}

export default FilmCard;
