import React from 'react';
class User2List extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <div>
        <p>{this.props.user2} à vous de jouer !</p>
      </div>
    );
  }
}

export default User2List;
