import React, { Component } from 'react';
import Input from './helpers/Input';
import Small from './helpers/Small'
import CheckBox from './helpers/CheckBox'

class Login extends Component {
  render() {
    return (
      <div>
        <form>
          <Input type="email"
            divClass="form-group"
            name="email"
            placeholder="Enter Email"
            autoComplete="username"
            small={
              <Small name="emailHelp"
                title="We'll never share your email with anyone else."
              />
            }
          />

          <Input type="password"
            divClass="form-group"
            name="password"
            placeholder="Password"
            autoComplete="new-password"
            small={
              <Small name="emailHelp"
                title={<span>Not yet Registered? <a href="#">Click Here</a></span>}
              />
            }
          />

          <CheckBox name="remember" title="Remember me" />
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default Login
