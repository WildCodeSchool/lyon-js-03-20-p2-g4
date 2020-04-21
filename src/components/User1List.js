import React from 'react';
import Button from './Button';
class User1List extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <div>
        <p>{this.props.user1} à vous de jouer !</p>
        <Button
          txt={`Lancer session ${this.props.user2}`}
          onClick={this.props.onClick}
        />
      </div>
    );
  }
}

export default User1List;
