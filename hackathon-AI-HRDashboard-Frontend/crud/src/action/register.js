import axios from 'axios';
import { REGISTRATION_INPROGRESS, REGISTRATION_SUCCESS, REGISTRATION_ERROR, REGISTRATION_FORM_CHANGES, REGISTRATION_FORM_VALIDATION } from '../constants/actions'

export function registerUser(e) {
  var data = document.getElementById("registration");
  var body = {}

  for (let index = 0; index < data.length - 1; index++) {
    if (data[index].name && data[index].value != undefined)
      body[data[index].name] = data[index].value
  }
  var params = {
    url: "http://localhost:1473/Register",
    method: "POST",
    data: body
  }

  return function (dispatch) {
    dispatch({ type: REGISTRATION_INPROGRESS });
    axios(params).then((response) => {
      console.log(response)
      dispatch({ type: REGISTRATION_SUCCESS })
    }).catch((err) => {
      console.log(err);
      dispatch({ type: REGISTRATION_ERROR })
    })
  }
}

export function handleOnChange(name, value) {
  return {
    type: REGISTRATION_FORM_CHANGES,
    payload: value,
    name
  }
}

export function validateInput(name, message) {
  return {
    type: REGISTRATION_FORM_VALIDATION,
    payload: message,
    name
  }
}