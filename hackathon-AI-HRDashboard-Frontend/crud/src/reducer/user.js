import { USER_REGISTER, REGISTRATION_FORM_CHANGES, REGISTRATION_FORM_VALIDATION } from '../constants/actions'
const initialState = {
  user: {
    email: '',
    password: '',
    firstname: '',
    lastname: '',
    birthday: '',
    mobile: '',
    address: '',
    city: '',
    state: '',
    zip: '',
  },
  validation: {

  }
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case USER_REGISTER:
      return {
        ...state,
        sample: action.payload
      }
    case REGISTRATION_FORM_CHANGES:
      return {
        ...state,
        user: { ...state.user, [action.name]: action.payload }
      }
    case REGISTRATION_FORM_VALIDATION:
      return {
        ...state,
        validation: {
          ...state.validation,
          [action.name]: action.payload,
        }
      }
    default:
      return state;
  }
}

export default user