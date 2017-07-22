import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    };
  }
  handleOnSubmit(event) {
    event.preventDefault();
    const username = this.refs.username.value.trim();
    const password = this.refs.password.value.trim();

    this.props.loginWithPassword(username, password, (error) => {
      if(error) {
        this.setState({ error: error.message });
      } else {
        this.setState({ error: '' });
      }
    });
  }
  render() {
    return (
      <div>
        <h1>Login</h1>
        {
          this.state.error ? <p>{this.state.error}</p> : undefined
        }
        <form onSubmit={this.handleOnSubmit.bind(this)} noValidate>
          <input ref="username" type="text" placeholder="Username" />
          <input ref="password" type="password" placeholder="Password" />
          <button>Login</button>
        </form>
        
        <Link to="/signup">Need an account?</Link>
      </div>
    );
  }
}

Login.propTypes = {
  loginWithPassword: PropTypes.func.isRequired
};

export default createContainer(() => {
  return {
    loginWithPassword: Meteor.loginWithPassword
  };
}, Login);
