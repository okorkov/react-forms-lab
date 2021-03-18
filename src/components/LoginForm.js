import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  submitForm = (e) => {
    if(this.state.username.length > 0 && this.state.password.length > 0) {
      this.props.handleLogin(this.state.username, this.state.password);
    }
    e.preventDefault();
  }

  handleInputChangeLogin = (e) => {
    
    this.setState({
      username: e.target.value,
    })
  }

  handleInputChangePassword = (e) => {
    
    this.setState({
      password: e.target.value
    })
  }


  render() {
    return (
      <form onSubmit={this.submitForm}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleInputChangeLogin}/>
            <p>state: {this.state.username}</p>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handleInputChangePassword}/>
            <p>state: {this.state.password}</p>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
