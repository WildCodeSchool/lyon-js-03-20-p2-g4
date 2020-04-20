import React from 'react';
import listAction from './listAction.json';
import '../styles/FilmCard.css';

class FilmCard extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      index: 1
    };
  }

  render () {
    const film = listAction.results[this.state.index];
    const posterPath = listAction.results[this.state.index].poster_path;
    const posterPath2 = listAction.results[this.state.index + 1].poster_path;
    const posterPath3 = listAction.results[this.state.index + 2].poster_path;
    return (
      <div className='all-films-cards'>
        <div key={film.id} className='film-card-container' style={{ backgroundImage: `url(http://image.tmdb.org/t/p/w342/${posterPath})` }} />
        <div key={film.id} className='film-card-container' style={{ backgroundImage: `url(http://image.tmdb.org/t/p/w342/${posterPath2})` }} />  
        <div key={film.id} className='film-card-container' style={{ backgroundImage: `url(http://image.tmdb.org/t/p/w342/${posterPath3})` }} />
      </div>
    );
  }
}

export default FilmCard;
