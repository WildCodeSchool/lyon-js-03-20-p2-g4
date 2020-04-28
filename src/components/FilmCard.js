import React from "react";
import "../styles/FilmCard.css";

class FilmCard extends React.Component {
  render() {
    const posterPath = this.props.apiList[this.props.index] ? (
      <div
        key={this.props.apiList[this.props.index].id}
        className="film-card-container"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(http://image.tmdb.org/t/p/w342/${
            this.props.apiList[this.props.index].poster_path
          })`,
        }}
      />
    ) : (
      <div className="empty-card" />
    );

    const posterPath2 = this.props.apiList[this.props.index + 1] ? (
      <div
        key={this.props.apiList[this.props.index + 1].id}
        className="film-card-container"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(http://image.tmdb.org/t/p/w342/${
            this.props.apiList[this.props.index + 1].poster_path
          })`,
        }}
      />
    ) : (
      <div className="empty-card" />
    );
    const posterPath3 = this.props.apiList[this.props.index + 2] ? (
      <div
        key={this.props.apiList[this.props.index + 2].id}
        className="film-card-container"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(http://image.tmdb.org/t/p/w342/${
            this.props.apiList[this.props.index + 2].poster_path
          })`,
        }}
      />
    ) : (
      <div className="empty-card" />
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
