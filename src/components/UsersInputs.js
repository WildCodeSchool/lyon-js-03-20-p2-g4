import React from 'react';
import '../styles/UsersInputs.css';

class UsersInputs extends React.Component {
  render () {
    const { user1, user2, onChange1, onChange2 } = this.props;
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
            defaultValue={user1}
            onChange={onChange1}
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
            defaultValue={user2}
            onChange={onChange2}
          />
        </div>
      </div>
    );
  }
}

export default UsersInputs;
