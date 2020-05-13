import React from 'react';
import Joi from 'joi-browser';
import Form from './common/form';

class LoginForm extends Form {
  state = {
    data: { username: '', password: '' },
    //render error messages with the below errors object
    errors: {},
  };

  schema = {
    username: Joi.string().required().label('Username'),
    password: Joi.string().required().label('Password'),
  };

  username = React.createRef();

  doSubmit = () => {
    //Call the server
    console.log('Submitted yo');
  };

  render() {
    return (
      <div className="container">
        <h1>Login form</h1>

        <form onSubmit={this.handleSubmit}>
          {this.renderInput('username', 'Username')}
          {this.renderInput('password', 'Password', 'password')}
          {this.renderButton('Login')}
        </form>
      </div>
    );
  }
}

export default LoginForm;
