import * as apiactions from '../constants/api';

const initialState = {
  leaves: {},
  loading: false,
  loaded: false,
  error: null
}

const home = (state = initialState, action) => {
  switch(action.type) {
    case apiactions.GET_TOTAL_LEAVES_SUCCESS:
    return {
      ...state,
      leaves: action.payload,
      loaded: true
    }
    case apiactions.GET_TOTAL_LEAVES_ERROR:
    return {
      ...state,
      error: action.payload,
      loading: false,
      loaded: false
    }
    case apiactions.GET_TOTAL_LEAVES_PENDING:
    return {
      ...state,
      loading: true
    }
    default:
    return state
  }
}

export default home
