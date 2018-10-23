import * as apiactions from '../constants/api';

const initialState = {
  ailments: {},
  loading: false,
  loaded: false,
  error: null
}

const ailment = (state = initialState, action) => {
  switch(action.type) {
    case apiactions.GET_TOTAL_AILMENTS_SUCCESS:
    return {
      ...state,
      ailments: action.payload,
      loaded: true
    }
    case apiactions.GET_TOTAL_AILMENTS_ERROR:
    return {
      ...state,
      error: action.payload,
      loading: false,
      loaded: false
    }
    case apiactions.GET_TOTAL_AILMENTS_PENDING:
    return {
      ...state,
      loading: true
    }
    default:
    return state
  }
}

export default ailment;