import React from 'react';

class Match extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      handleAnimation: false
    };
  }

  componentDidMount () {
    this.setState({ handleAnimation: true });
  }

  componentWillUnmount () {
    this.props.onHandleMatch(false);
  }

  render () {
    return (
      <>
        {this.props.currentMatchedMovie !== undefined && (
          <div
            className={this.state.handleAnimation ? 'new-match' : 'unvisible'}
          >
            <h3 className='subtitle'>🔥 Match ! 🔥</h3>
            <img
              src={`http://image.tmdb.org/t/p/w185/${this.props.currentMatchedMovie.poster_path}`}
            />
          </div>
        )}
      </>
    );
  }
}

export default Match;
