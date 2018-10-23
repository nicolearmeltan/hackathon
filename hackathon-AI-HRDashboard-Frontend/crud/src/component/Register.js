import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registerUser, handleOnChange, validateInput } from '../action/register';
import Input from './helpers/Input';
import Select from './helpers/Select';
import { validate } from './helpers/Validation'
import Loader from './helpers/Loader'

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user,
    isValid: state.user.validation
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    register: (e) => dispatch(registerUser(e)),
    changes: (name, value) => dispatch(handleOnChange(name, value)),
    valid: (name, value) => dispatch(validateInput(name,value))
  }
}

class Register extends Component {
  constructor() {
    super()
    this.state = {
      timer: 0
    }
    this.onRegister = this.onRegister.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.validation = this.validation.bind(this);
  }

  componentDidUpdate(){
    
  }

  onRegister(e) {
    e.preventDefault();
    this.props.register(e)
  }

  handleOnChange(e) {
    this.props.changes(e.target.name, e.target.value);
  }

  validation(e, required, length) {
    var val = e.target.value;
    var type = e.target.type;
    var name = e.target.name;
    var format = e.target.format;
    clearTimeout(this.state.timer)
    this.state.timer = setTimeout(() => this.props.valid(name,validate(type, required, val, length, format)),1500);
  }

  render() {
    console.log(this.props.isValid ? this.props.isValid.email:null, 'user')
    return (
      <div>
        <form method="post" id="registration" name="registration" onSubmit={this.onRegister}>
          <Input type="email" title="Email" name="email"
            placeholder="Email" onChange={(e) => {this.handleOnChange(e), this.validation(e, true, 5)}}
            value={this.props.user.email} prependIcon="glyphicon glyphicon-envelope"
            class={this.props.isValid.email != undefined ? this.props.isValid.email ? "form-control is-invalid" : "form-control is-valid" : undefined}
            autoComplete="email" small={this.props.isValid ? this.props.isValid.email : ""} smallClass={this.props.isValid ? this.props.isValid.email ? "valid-feedback":"invalid-feedback" : ""}
            validationClass={this.props.isValid.email != undefined ? this.props.isValid.email ? "glyphicon glyphicon-remove": "glyphicon glyphicon-ok" : " "}
          /><p>Hello</p>
          <Input type="password" title="Password" name="password"
            placeholder="Password" onChange={(e) => {this.handleOnChange(e), this.validation(e, true, 5)}}
            value={this.props.user.password} prependIcon="glyphicon glyphicon-lock"
            autoComplete="new-password" required={true}
          />
          <Input type="confirm-password" title="Confirm Password" name="confirm-password"
            placeholder="Confirm Password" onChange={(e) => this.handleOnChange(e)}
            value={this.props.password} prependIcon="glyphicon glyphicon-lock"
            autoComplete="new-password" required={true}
          />
          <Input type="text" title="FirstName" name="firstName"
            placeholder="FirstName" prependIcon="glyphicon glyphicon-user"
            onChange={(e) => this.handleOnChange(e)} value={this.props.user.firstname}
            required={true}
          />
          <Input type="text" title="LastName" name="lastName"
            placeholder="LastName" prependIcon="glyphicon glyphicon-user"
            onChange={(e) => this.handleOnChange(e)} value={this.props.user.lastname}
            required={true}
          />
          <Input type="date" title="Birthday" name="birthday"
            placeholder="Select Date" prependIcon="glyphicon glyphicon-calendar"
            onChange={(e) => this.handleOnChange(e)} value={this.props.user.birthday}
            required={true}
          />
          <Input type="text" title="Mobile" name="mobile"
            placeholder="9XXXXXXXXX" prependIcon="glyphicon glyphicon-phone"
            onChange={(e) => this.handleOnChange(e)} value={this.props.user.mobile}
            required={true}
          />
          <Input type="text" title="Address" name="address"
            placeholder="House No. Unit, Street" prependIcon="glyphicon glyphicon-home"
            onChange={(e) => this.handleOnChange(e)} value={this.props.user.address}
            required={true}
          />
          <Input type="text" title="City" name="city"
            placeholder="City" prependIcon="glyphicon glyphicon-map-marker"
            onChange={(e) => this.handleOnChange(e)} value={this.props.user.city}
            required={true}
          />
          <Select name="state" title="State" class="form-group custom-select"
            prependIcon="glyphicon glyphicon-globe"
            values={[
              {
                defaultValue: true,
                value: "Please Select State"
              },
              {
                value: "NCR"
              },
              {
                value: "Region 1"
              },
              {
                value: "CAR"
              },
              {
                value: "Region 2"
              },
              {
                value: "Region 3"
              },
              {
                value: "Region 4A"
              },
              {
                value: "Region 4B"
              },
              {
                value: "Region 5"
              },
              {
                value: "Region 6"
              },
              {
                value: "Region 7"
              },
              {
                value: "Region 8"
              },
              {
                value: "Region 9"
              },
              {
                value: "Region 10"
              },
              {
                value: "Region 11"
              },
              {
                value: "Region 12"
              },
              {
                value: "Region 13"
              },
              {
                value: "ARMM"
              },
            ]} />
          <Input type="text" title="Zip" name="zip"
            placeholder="Zip" prependIcon="glyphicon glyphicon-transfer"
            onChange={(e) => this.handleOnChange(e)} value={this.props.user.zip}
            required={true}
          />
          <button type="submit" className="btn btn-primary">Sign in</button>
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
