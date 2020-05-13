import React, { Component } from 'react';
import Joi, { join } from 'joi-browser';

import Input from './common/input';
class LoginForm extends Component {
  state = {
    account: { username: '', password: '' },
    //render error messages with the below errors object
    errors: {},
  };

  schema = {
    username: Joi.string().required().label('Username'),
    password: Joi.string().required().label('Password'),
  };

  username = React.createRef();

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.account, this.schema, options);

    if (!error) return null;

    const errors = {};

    for (let item of error.details) {
      errors[item.path[0]] = item.message;
    }

    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();

    // if there are no errors, validate method will return null
    this.setState({ errors: errors || {} });
    //if there are errors, we will call them immediately
    if (errors) return;

    //Call the server
    console.log('Submitted yo');
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };

    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);

    if (errorMessage) {
      errors[input.name] = errorMessage;
    } else {
      delete errors[input.name];
    }

    account[input.name] = input.value;
    this.setState({ account, errors });
  };

  render() {
    const { account, errors } = this.state;

    return (
      <div className="container">
        <h1>Login form</h1>

        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={account.username}
            label="Username"
            onChange={this.handleChange}
            error={errors.username}
          />

          <Input
            name="password"
            value={account.password}
            label="Password"
            onChange={this.handleChange}
            error={errors.password}
          />

          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;