import React from 'react';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signinWithGoogle } from '../../firebase/firebase.util';

class Signin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: '', password: '' });
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2 className='title'>I already have an account</h2>
        <span>Signin with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            value={this.state.email}
            type='email'
            handleChange={this.handleChange}
            label='email'
            required
          />

          <FormInput
            name='password'
            value={this.state.password}
            type='password'
            handleChange={this.handleChange}
            label='password'
            required
          />

          <CustomButton type='submit'>Sign in</CustomButton>
          <CustomButton onClick={signinWithGoogle}>
            Signin With Google{' '}
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default Signin;
