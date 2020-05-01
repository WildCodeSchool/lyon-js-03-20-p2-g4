import React from 'react';
import '../styles/Drawer.css';
import listAction from './listAction.json';

class Drawer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      people: [],
      dataLoaded: false,
      director: [],
    };
  }

  getPeople = async () => {
    const people = await window.fetch(`https://api.themoviedb.org/3/movie/${listAction.results[0].id}/credits?api_key=fcbb1bd6a2b486386efe153e5874f9ee`)
      .then(response => response.json())
      .then(data => data);
    this.setState({ people, dataLoaded: true });
  }

  componentDidMount () {
    this.getPeople();
  }

  render () {
    /* const runtime = listAction.results[0].runtime;
    const heures = Math.floor(runtime / 60);
    const minutes = runtime % 60; */
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
      return stars;
    };

    const getStars = starsDisplay(voteAverage);

    return (
      <div className='drawer-container'>
        <div className='drawer-overlay' />
        <div className='close-drawer'><span /></div>
        <div className='drawer-movie-all-info-container'>
          <div
            className='drawer-movie-banner' style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(http://image.tmdb.org/t/p/w342/${
                        listAction.results[0].poster_path
                    })`
            }}
          />
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
            <h4>{listAction.results[0].title}</h4>
            <span>{`De ${this.state.dataLoaded ? (this.state.people.crew.filter(director => {
              return director.job === "Director"
              }))[0].name : '...'} - [genre] - [durée] - ${listAction.results[0].release_date}`}</span>
            <p>{listAction.results[0].overview}</p>
          </div>
          <div className='drawer-movie-casting'>
            <h5>Casting</h5>
            <div className='drawer-actor-container'>
              {this.state.dataLoaded ? this.state.people.cast.map(casting => {
                return (
                  <div className='drawer-actor' key={casting.id}>
                    <img src={`http://image.tmdb.org/t/p/w185/${casting.profile_path}`} alt={casting.name} />
                  </div>
                );
              }) : (
                <div className='drawer-actor'>
                  <p>Loading ...</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Drawer;
