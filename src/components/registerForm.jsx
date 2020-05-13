import React from 'react';
import Joi from 'joi-browser';
import Form from './common/form';

class RegisterForm extends Form {
  state = {
    data: { username: '', password: '', name: '' },
    //render error messages with the below errors object
    errors: {},
  };

  schema = {
    username: Joi.string().email().required().label('Username'),
    password: Joi.string().required().min(5).label('Password'),
    name: Joi.string().required().label('Name'),
  };

  username = React.createRef();

  doSubmit = () => {
    //Call the server
    console.log('Registered yo');
  };

  render() {
    return (
      <div className="container">
        <h1>Register</h1>

        <form onSubmit={this.handleSubmit}>
          {this.renderInput('username', 'Username')}
          {this.renderInput('password', 'Password', 'password')}
          {this.renderInput('name', 'Name')}
          {this.renderButton('Register')}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
