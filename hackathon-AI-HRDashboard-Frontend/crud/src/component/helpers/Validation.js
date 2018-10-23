import React from 'react';
const errorMessage = require('./validationMessage.json')
const format = require('string-format')
const validationClass = {
  isValid: "form-control is-valid",
  isInvalid: "form-control is-invalid"
}

export function validate(type, required = false, data, length = 0, format) {
  if (required && length != 0) {
    return isRequired(data)
      ? isRequired(data)
      : checkLength(type, data, length)
        ? checkLength(type, data, length)
        : checkString(type, data, length);
  }
}

function isRequired(data) {
  return String(data).trim() == "" ? errorMessage.message.required : false;
}

function checkLength(type, data, length) {
  return String(data).length < length ? format(errorMessage.message.length, type, length) : false;
}

function checkString(type, data, format) {
  if (type == "letters") {
    var letters = new RegExp(/^[a-zA-Z\s]*$/);
    return letters.test(data) ? false : errorMessage.message.numbers
  }
  if (type == "numbers") {
    var numbers = new RegExp(/^\d+$/);
    return numbers.test(data) ? false : errorMessage.message.numbers
  }
  if (type == "email") {
    var email = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/);
    return email.test(data) ? false : errorMessage.message.email;
  }
}




