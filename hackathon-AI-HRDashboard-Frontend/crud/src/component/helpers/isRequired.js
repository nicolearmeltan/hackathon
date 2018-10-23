const errorMessage = require('./validationMessage.json');
export function isRequired(data) {
  return String(data).trim() == "" ? errorMessage.message.required : false;
}