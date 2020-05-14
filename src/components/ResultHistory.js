import React from 'react';
import '../styles/ResultHistory.css';
import defaultImage from '../images/grey-logo.png';

const ResultHistory = (props) => {
  return (
    <aside className='result-history-container'>
      <header className='result-history-header'>Historique</header>
      <div className='result-history-timeline-container'>
        <div className='result-history-timeline-user1-container'>
          <h4>{props.user1}</h4>
          {props.apiList.map(film => (
            <div className={props.user1List.includes(film) ? (props.matchList.includes(film) ? 'timeline-movie-container validated matched' : 'timeline-movie-container validated') : 'timeline-movie-container rejected'} key={`${film.id}-user-1`}>
              <div
                className={props.user1List.includes(film) ? 'history-film-card validated' : 'history-film-card rejected'}
                style={{ backgroundImage: film.poster_path ? `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(http://image.tmdb.org/t/p/w342/${film.poster_path}` : `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(${defaultImage}` }}
              />
            </div>
          ))}
        </div>
        <div className='result-history-timeline-user2-container'>
          <h4>{props.user2}</h4>
          {props.apiList.map(film => (
            <div className={props.user2List.includes(film) ? 'timeline-movie-container validated' : 'timeline-movie-container rejected'} key={`${film.id}-user-2`}>
              <div
                className={props.user2List.includes(film) ? 'history-film-card validated' : 'history-film-card rejected'}
                style={{ backgroundImage: film.poster_path ? `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(http://image.tmdb.org/t/p/w342/${film.poster_path}` : `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(${defaultImage}` }}
              />
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default ResultHistory;
