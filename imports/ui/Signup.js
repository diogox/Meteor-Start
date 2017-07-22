import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base';
import { createContainer } from 'meteor/react-meteor-data';

export class Signup extends React.Component {
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

    this.props.createUser({ username, password }, (error) => {
       if(error) {
         this.setState({ error: error.reason });
       } else {
         this.setState({ error: '' });
       }
    });
  }
  render() {
    return(
      <div>
        <h1>Signup</h1>
        {
          this.state.error ? <p>{this.state.error}</p> : undefined
        }
        <form onSubmit={this.handleOnSubmit.bind(this)} noValidate>
          <input type="text" ref="username" placeholder="Username" />
          <input type="password" ref="password" placeholder="Password" />
          <button>Signup</button>
        </form>
        
        <Link to="/login">Already have an account?</Link>
      </div>
    );
  };
}

Signup.propTypes = {
  createUser: PropTypes.func.isRequired
};

export default createContainer(() => {
  return {
    createUser: Accounts.createUser
  };
}, Signup);
