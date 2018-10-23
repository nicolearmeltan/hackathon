import { CHANGE_PAGE, TOGGLE_CLIENT } from '../constants/actions'
const initialState = {
  active: false,
  name: '',
  toggle: false,
}

const navigation = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PAGE:
      return [
        ...state,
        {
          active: true,
          name: action.payload
        }
      ]
    case TOGGLE_CLIENT:
      return Object.assign({}, state,
        {
          toggle: action.isOpen,
          name: action.name
        }
      )
    default:
      return state;
  }
}

export default navigation