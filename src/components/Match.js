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
      <div className={this.state.handleAnimation ? 'new-match' : 'unvisible'}>
        Match ! Pour le film {this.props.currentMatchedMovie.title}
      </div>
    );
  }
}

export default Match;
