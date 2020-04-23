import React from 'react';
import listAction from './listAction.json';
import '../styles/FilmCard.css';

class FilmCard extends React.Component {
  render () {
    const posterPath = listAction.results[this.props.index].poster_path;
    const posterPath2 = listAction.results[this.props.index + 1].poster_path;
    const posterPath3 = listAction.results[this.props.index + 2].poster_path;
    return (
      <div className='all-films-cards'>
        <div key={posterPath} className='film-card-container' style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(http://image.tmdb.org/t/p/w342/${posterPath})` }} />
        <div key={posterPath2} className='film-card-container' style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(http://image.tmdb.org/t/p/w342/${posterPath2})` }} />
        <div key={posterPath3} className='film-card-container' style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(http://image.tmdb.org/t/p/w342/${posterPath3})` }} />
      </div>
    );
  }
}

export default FilmCard;
