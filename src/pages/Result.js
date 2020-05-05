import React from 'react';
import MovieLists from '../components/MovieLists';
import HeaderSmall from '../components/HeaderSmall';
import '../styles/Result.css';

class Result extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      matchList: this.props.matchList
    };
  }

  render () {
    return (
      <div className='result'>
        {this.state.matchList.length === 0 ? (
          <>
            <div className='centered'>
              <HeaderSmall />
              <h2 className='subtitle'>Oh non, vous n’avez aucun match !</h2>
            </div>
            <MovieLists />
          </>
        ) : (
          <>
            <div className='centered'>
              <HeaderSmall />
              <h2 className='title'>{this.state.matchList.length === 1 ? 'Bravo, vous avez 1 match !' : `Bravo, vous avez ${this.state.matchList.length} matchs !`}</h2>
              <div className='matched-movie-container'>
                {this.state.matchList.map((film) => {
                  return (
                    <div
                      className='matched-movie'
                      style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(http://image.tmdb.org/t/p/w342/${film.poster_path})` }}
                      key={film.id}
                    />
                  );
                })}
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default Result;
