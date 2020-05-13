import React, { useEffect } from 'react';
import '../styles/History.css';
import Logo from '../images/logoFull.svg';
import genre from './genre.js';
import people from './people.js';
import decades from './decades.js';
import defaultImage from '../images/grey-logo.png';

function History(props) {
  let result = [];

  if (props.type === 'genres') {
    result = genre.filter(f => f.id === parseInt(props.id));
  } else if (props.type === 'people') {
    result = people.filter(f => f.id === parseInt(props.id));
  } else if (props.type === 'decades') {
    result = decades.filter(f => f.id === parseInt(props.id));
  } else if (props.type === 'trending') {
    props.id === 'day' ? result = 'jour' : result = 'semaine';
  }

  useEffect(() => {
    document.getElementById('timeline-container').scrollTo(0, 0);
  }, [props.index]);

  return (
    <div className='history-sidebar-container'>
      <div className='logo-container'>
        <div className='logo' style={{ backgroundImage: `url(${Logo})` }} />
      </div>
      <div className='user-turn-container'>
        <h3 className='subtitle'>{props.user}, c'est à vous !</h3>
        <p>Liste : {result[0].caption} ({props.index === 20 ? props.index : props.index + 1}/{props.apiList.length})</p>
      </div>
      <div className='history-title'>
        <h3 className='subtitle'>Historique</h3>
      </div>
      <div className='history-container'>
        <div id='timeline-container'>
          {props.apiList.map(movie => (
            <div className={props.apiList.indexOf(movie) <= props.index ? 'timeline-movie-container' : 'timeline-movie-container hidden'} key={movie.id}>
              <div
                className={props.apiList.indexOf(movie) <= props.index ? 'history-film-card' : 'history-film-card hidden'}
                style={{ backgroundImage: movie.poster_path ? `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(http://image.tmdb.org/t/p/w342/${movie.poster_path}` : `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(${defaultImage}`}}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default History;
