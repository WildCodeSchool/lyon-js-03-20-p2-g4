import React from 'react';
import '../styles/Drawer.css';
import listAction from './listAction.json';

class Drawer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      people: [],
      peopleLoaded: false,
      movieDetailsLoaded: false,
      movieVideoLoaded: false,
      director: [],
      movieDetails: [],
      movieVideo: [],
      runTimeHM: ''
    };
  }

  getPeople = async () => {
    const people = await window.fetch(`https://api.themoviedb.org/3/movie/${this.props.filmId}/credits?api_key=fcbb1bd6a2b486386efe153e5874f9ee`)
      .then(response => response.json())
      .then(data => data);
    this.setState({ people, peopleLoaded: true });
  }

  getMovieDetails = async () => {
    const movieDetails = await window.fetch(`https://api.themoviedb.org/3/movie/${this.props.filmId}?api_key=fcbb1bd6a2b486386efe153e5874f9ee`)
      .then(response => response.json())
      .then(data => data);
    this.setState({ movieDetails, movieDetailsLoaded: true });
  }

  transformDuration = (duration) => {
    const runTimeHours = Math.floor(duration / 60);
    const runTimeMinutes = duration % 60;
    const runTimeHM = runTimeHours + 'h' + runTimeMinutes;
    return runTimeHM;
  }

  getMovieVideo = async () => {
    const movieVideo = await window.fetch(`https://api.themoviedb.org/3/movie/${this.props.filmId}/videos?api_key=fcbb1bd6a2b486386efe153e5874f9ee&language=fr-FR`)
      .then(response => response.json())
      .then(data => console.log(data));
    this.setState({ movieVideo, movieVideoLoaded: true });
  }

  componentDidMount () {
    this.getMovieDetails();
    this.getPeople();
    this.getMovieVideo();
  }

  render () {
    // Get movie rating
    const voteAverage = (Math.round((listAction.results[0].vote_average / 2) * 10) / 10);
    const stars = [];
    const starsDisplay = (rating) => {
      for (let i = 0; i < 5; i++) {
        if (rating >= 1) {
          stars.push([i, 1]);
        } else if (rating > 0 && rating < 1) {
          stars.push([i, 0.5]);
        } else {
          stars.push([i, 0]);
        }
        rating -= 1;
      }
      return stars;
    };

    const getStars = starsDisplay(voteAverage);

    return (
      <>
        <div className={this.props.getInfo ? 'drawer-overlay displayed' : 'drawer-overlay'} onClick={this.props.handleCloseDrawer} />
        <div className={this.props.getInfo ? 'drawer-container opened' : 'drawer-container closed'}>
          <div className='close-drawer' onClick={this.props.handleCloseDrawer}><span /></div>
          {this.state.movieDetailsLoaded && this.state.movieVideoLoaded && this.state.peopleLoaded
            ? (
              <div className='drawer-movie-all-info-container'>
                <div
                  className='drawer-movie-banner' style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(http://image.tmdb.org/t/p/w342/${
                            listAction.results[0].poster_path
                        })`
                  }}
                />
                <div className='drawer-link-rating'>
                  <a href={`https://www.youtube.com/watch?v=${this.state.movieVideo}`} target='_blank' rel='noopener noreferrer'>
                    <div className='button'>
                      <span className='drawer-play-icon' />
                                            Bande annonce
                    </div>
                  </a>
                  <div className='drawer-rating-container'>
                    {getStars.map(star => {
                      if (star[1] === 1) {
                        return <span key={star[0]} className='star full' />;
                      } else if (star[1] === 0.5) {
                        return <span key={star[0]} className='star half' />;
                      } else {
                        return <span key={star[0]} className='star empty' />;
                      }
                    })}
                    <span className='global-rating'>{`${voteAverage}/5`}</span>
                  </div>
                </div>
                <div className='drawer-movie-info-container'>
                  <h4>{listAction.results[0].title}</h4>
                  <span>{`De ${this.state.peopleLoaded ? (this.state.people.crew.filter(director => {
                  return director.job === 'Director';
                  }))[0].name : '...'} - ${this.state.movieDetailsLoaded ? this.state.movieDetails.genres[0].name : '...'} - ${this.transformDuration(this.state.movieDetails.runtime)} - ${listAction.results[0].release_date.split('-')[0]}`}
                  </span>
                  <p>{listAction.results[0].overview}</p>
                </div>
                <div className='drawer-movie-casting'>
                  <h5>Casting</h5>
                  <div className='drawer-actor-container'>
                    {this.state.peopleLoaded ? this.state.people.cast.map(casting => {
                      return (
                        <a href={`https://www.google.com/search?q=${casting.name}`} target='_blank' rel='noopener noreferrer' key={casting.id}>
                          <div className='drawer-actor'>
                            <img src={`http://image.tmdb.org/t/p/w185/${casting.profile_path}`} alt={casting.name} />
                          </div>
                        </a>
                      );
                    }) : (
                      <div className='drawer-actor'>
                        <p>Loading ...</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ) : <p>Chargement...</p>}

        </div>
      </>
    );
  }
}

export default Drawer;
