import React from "react";

class UsersInputs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user1: 'Tic',
      user2: 'Tac'
    };
  }

  handleChange1 = (event) => {
    const user = event.target.value
    this.setState({user1: user})
    console.log(this.state.user1)
  }

  handleChange2 = (event) => {
    const user = event.target.value
    this.setState({user2: user})
  }

  render() {
    return (
      <React.Fragment>
        <h2 className="subtitle">Qui participe ?</h2>
        <div className="form-group">
          <label htmlFor="user1"></label>
          <input
            type="text"
            id="user1"
            name="user1"
            placeholder="Utilisateur 1"
            value={this.state.user1}
            onChange={this.handleChange1}
          />
        </div>
        <div className="form-group">
          <label htmlFor="user2"></label>
          <input
            type="text"
            id="user2"
            name="user2"
            placeholder="Utilisateur 2"
            value={this.state.user2}
            onChange={this.handleChange2}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default UsersInputs;
