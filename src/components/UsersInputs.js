import React from 'react';
import '../styles/UsersInputs.css';

class UsersInputs extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      user1: 'Tic',
      user2: 'Tac'
    };
  }

  handleChange1 = (event) => {
    const user = event.target.value;
    this.setState({ user1: user });
  };

  handleChange2 = (event) => {
    const user = event.target.value;
    this.setState({ user2: user });
  };

  render () {
    return (
      <div className='usersInputs'>
        <h2 className='subtitle'>Qui participe ?</h2>
        <div className='form-group'>
          <label htmlFor='user1' />
          <input
            className='content'
            type='text'
            id='user1'
            name='user1'
            placeholder='Utilisateur 1'
            defaultValue={this.state.user1}
            onChange={this.handleChange1}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='user2' />
          <input
            className='content'
            type='text'
            id='user2'
            name='user2'
            placeholder='Utilisateur 2'
            defaultValue={this.state.user2}
            onChange={this.handleChange2}
          />
        </div>
      </div>
    );
  }
}

export default UsersInputs;
