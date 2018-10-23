import * as apiactions from '../constants/api';

const initialState = {
  qualities: {},
  loading: false,
  loaded: false,
  error: null
}

const quality = (state = initialState, action) => {
  switch(action.type) {
    case apiactions.GET_QOL_SUCCESS:
    return {
      ...state,
      qualities: action.payload,
      loaded: true
    }
    case apiactions.GET_QOL_ERROR:
    return {
      ...state,
      error: action.payload,
      loading: false,
      loaded: false
    }
    case apiactions.GET_QOL_PENDING:
    return {
      ...state,
      loading: true
    }
    default:
    return state
  }
}

export default quality;