import React from 'react';
import '../styles/SidebarInfoDesktop.css';
import ApiKey from '../ApiKey';
import DefaultAvatar from '../images/default-avatar.png';
import defaultImage from '../images/grey-logo.png';
import { Ellipsis } from 'react-awesome-spinners';

class SideBarInfoDesktop extends React.Component {
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

  _isMounted = false;
  getPeople = async () => {
    this._isMounted = true;
    const people = await window
      .fetch(
        `https://api.themoviedb.org/3/movie/${this.props.filmId}/credits?api_key=${ApiKey}`
      )
      .then((response) => response.json())
      .then((data) => data);
    if (this._isMounted) { this.setState({ people, peopleLoaded: true }); }
  };

  getMovieDetails = async () => {
    this._isMounted = true;
    const movieDetails = await window
      .fetch(
        `https://api.themoviedb.org/3/movie/${this.props.filmId}?api_key=${ApiKey}&language=fr-FR`
      )
      .then((response) => response.json())
      .then((data) => data);
    if (this._isMounted) { this.setState({ movieDetails, movieDetailsLoaded: true }); }
  };

  transformDuration = (duration) => {
    const runTimeHours = Math.floor(duration / 60);
    let runTimeMinutes = duration % 60;
    if (runTimeMinutes < 10) {
      runTimeMinutes = '0' + runTimeMinutes;
    }
    const runTimeHM = runTimeHours + 'h' + runTimeMinutes;
    return runTimeHM;
  };

  getMovieVideo = async () => {
    this._isMounted = true;
    const movieVideo = await window
      .fetch(
        `https://api.themoviedb.org/3/movie/${this.props.filmId}/videos?api_key=${ApiKey}&language=fr-FR`
      )
      .then((response) => response.json())
      .then((data) => data.results[0]);
    if (this._isMounted) { this.setState({ movieVideo, movieVideoLoaded: true }); }
  };

  componentDidMount () {
    this.getMovieDetails();
    this.getPeople();
    this.getMovieVideo();
  }

  componentDidUpdate (prevProps) {
    if (prevProps.filmId !== this.props.filmId) {
      this.getMovieDetails();
      this.getPeople();
      this.getMovieVideo();
    }
  }

  componentWillUnmount () {
    this._isMounted = false;
  }

  render () {
    // Get movie rating
    const voteAverage =
      Math.round((this.state.movieDetails.vote_average / 2) * 10) / 10;
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
        {this.state.movieDetailsLoaded &&
          this.state.movieVideoLoaded &&
          this.state.peopleLoaded ? (
            <aside className='sidebar-info-container'>
              <div
                className='sidebar-info-movie-all-info-container'
                id='sidebar-info-movie-all-info-container'
              >
                <div
                  className='sidebar-info-movie-banner'
                  style={this.state.movieDetails.poster_path !== null ? { backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(http://image.tmdb.org/t/p/w342/${this.state.movieDetails.poster_path})` } : { backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(${defaultImage})` }}
                />
                <div className='sidebar-info-link-rating'>
                  {this.state.movieVideo !== undefined ? (
                    <a
                      href={`https://www.youtube.com/watch?v=${this.state.movieVideo.key}`}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <div className='button'>
                        <span className='sidebar-info-play-icon' />
                    Bande annonce
                      </div>
                    </a>
                  ) : (
                    <a
                      href={`https://www.google.com/search?q=${this.state.movieDetails.title}+movie`}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <div className='button'>Plus d'informations</div>
                    </a>
                  )}
                  <div className='sidebar-info-rating-container'>
                    {getStars.map((star) => {
                      if (star[1] === 1) {
                        return <span key={`${star[0]}-sidebar`} className='star full' />;
                      } else if (star[1] === 0.5) {
                        return <span key={`${star[0]}-sidebar`} className='star half' />;
                      } else {
                        return <span key={`${star[0]}-sidebar`} className='star empty' />;
                      }
                    })}
                    <span className='global-rating'>{`${voteAverage}/5`}</span>
                  </div>
                </div>
                <div className='sidebar-info-movie-info-container'>
                  <h4>{this.state.movieDetails.title}</h4>
                  <span>
                    {`De ${
                      this.state.peopleLoaded
                        ? this.state.people.crew.filter((director) => {
                          return director.job === 'Director';
                        })[0]
                          ? this.state.people.crew.filter((director) => {
                            return director.job === 'Director';
                          })[0].name
                          : 'non renseigné'
                        : '...'
                      } - ${
                      this.state.movieDetailsLoaded
                        ? this.state.movieDetails.genres[0]
                          ? this.state.movieDetails.genres[0].name
                          : 'non-classé'
                        : '...'
                      } - ${this.transformDuration(
                        this.state.movieDetails.runtime
                      )} - ${this.state.movieDetails.release_date.split('-')[0]}`}
                  </span>
                  <p>{this.state.movieDetails.overview}</p>
                </div>
                <div className='sidebar-info-movie-casting'>
                  <h5>Casting</h5>
                  <div className='sidebar-info-actor-container'>
                    {this.state.peopleLoaded ? (
                      this.state.people.cast.map((casting, index) => {
                        return (

                          <div
                            className='sidebar-info-actor-img-name-container'
                            id={casting.id + casting.name}
                            key={index}
                          >
                            <a
                              href={`https://www.google.com/search?q=${casting.name}`}
                              target='_blank'
                              rel='noopener noreferrer'
                            >
                              <div className='sidebar-info-actor'>
                                {casting.profile_path === null ? (
                                  <img src={DefaultAvatar} alt={casting.name} />
                                ) : (
                                  <img
                                    src={`http://image.tmdb.org/t/p/w185/${casting.profile_path}`}
                                    alt={casting.name}
                                  />
                                )}
                              </div>
                            </a>
                            <p>{casting.name}</p>
                          </div>
                        );
                      })
                    ) : (
                      <div className='sidebar-info-actor'>
                        <Ellipsis color='#66C69B' />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </aside>
          ) : (
            <Ellipsis color='#66C69B' />
          )}
      </>
    );
  }
}

export default SideBarInfoDesktop;
