import React from "react";

class Match extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      handleAnimation: false,
    };
  }

  componentDidMount() {
    this.setState({ handleAnimation: true });
  }

  componentWillUnmount() {
    this.props.onHandleMatch(false);
  }

  render() {
    return (
      <>
        {this.props.currentMatchedMovie !== undefined && (
          <div
            className={this.state.handleAnimation ? "new-match" : "unvisible"}
          >
            <h3 className="subtitle">
              <span role="img" aria-label="fire">
                🔥
              </span>{" "}
              Match !{" "}
              <span role="img" aria-label="fire">
                🔥
              </span>
            </h3>
            <img
              src={`http://image.tmdb.org/t/p/w185/${this.props.currentMatchedMovie.poster_path}`}
              alt={this.props.currentMatchedMovie.title}
            />
          </div>
        )}
      </>
    );
  }
}

export default Match;
