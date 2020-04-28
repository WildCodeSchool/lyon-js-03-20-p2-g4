import React from 'react';
import '../styles/Drawer.css';
import listAction from './listAction.json';
import ReactScrollWheelHandler from "react-scroll-wheel-handler";

class Drawer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scrolled:false,
        }
    }



    render() {
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
        <ReactScrollWheelHandler downHandler={() => this.setState({ scrolled: true })} upHandler={() => this.setState({ scrolled: false })}>
            <div className='drawer-container'>
            <div className='drawer-overlay' />
            <div className='drawer-movie-all-info-container'>
                <div className={!this.state.scrolled ? "banner-link-rating-container" : "banner-link-rating-container scrolled"} >
                    <div className='drawer-movie-banner' style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(http://image.tmdb.org/t/p/w342/${
                        listAction.results[0].poster_path
                    })`
                    }}>
                        <span className='drawer-close' />
                    </div>
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
                </div>
                    <div className='drawer-movie-info-container'>
                        <h4>{listAction.results[0].title}</h4>
                        <span>{`De [realisateur] - [genre] - [durée] - ${listAction.results[0].release_date}`}</span>
                        <p>{listAction.results[0].overview}</p>
                    </div>
                    <div className='drawer-movie-casting'>
                        <h5>Casting</h5>
                        <div className="drawer-actor-container">
                            <div className='drawer-actor'>
                                <img src='#' alt='[actor name]' />
                            </div>
                            <div className='drawer-actor'>
                                <img src='#' alt='[actor name]' />
                            </div>
                            <div className='drawer-actor'>
                                <img src='#' alt='[actor name]' />
                            </div>
                            <div className='drawer-actor'>
                                <img src='#' alt='[actor name]' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ReactScrollWheelHandler>
    );
    }
};

export default Drawer;
