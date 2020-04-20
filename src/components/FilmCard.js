import React from 'react';
import listAction from './listAction.json';
import '../styles/FilmCard.css';

class FilmCard extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      index: 0
    };
  }

  render () {
    const film = listAction.results[this.state.index];
    const posterPath = listAction.results[this.state.index].poster_path;
    return (
      <div key={film.id} className='film-card-container' style={{ backgroundImage: `url(http://image.tmdb.org/t/p/w342/${posterPath})` }} />
    )
  }
}

export default FilmCard;
