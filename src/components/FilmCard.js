import React from "react";
import listAction from "./listAction.json";
import "../styles/FilmCard.css";

class FilmCard extends React.Component {
  render() {
    const posterPath = listAction.results[this.props.index] ? (
      <div
        key={listAction.results[this.props.index].poster_path}
        className="film-card-container"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(http://image.tmdb.org/t/p/w342/${
            listAction.results[this.props.index].poster_path
          })`,
        }}
      />
    ) : (
      <div></div>
    );
    const posterPath2 = listAction.results[this.props.index + 1] ? (
      <div
        key={listAction.results[this.props.index + 1].poster_path}
        className="film-card-container"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(http://image.tmdb.org/t/p/w342/${
            listAction.results[this.props.index + 1].poster_path
          })`,
        }}
      />
    ) : (
      <div></div>
    );
    const posterPath3 = listAction.results[this.props.index + 2] ? (
      <div
        key={listAction.results[this.props.index + 2].poster_path}
        className="film-card-container"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(http://image.tmdb.org/t/p/w342/${
            listAction.results[this.props.index + 2].poster_path
          })`,
        }}
      />
    ) : (
      <div></div>
    );
    return (
      <div className="all-films-cards">
        {posterPath}
        {posterPath2}
        {posterPath3}
      </div>
    );
  }
}

export default FilmCard;
