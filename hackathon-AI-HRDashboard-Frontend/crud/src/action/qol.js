import axios from "axios";
import * as action from "../constants/api";

export function getQOL() {
  return function(dispatch) {
    dispatch({ type: action.GET_QOL_PENDING });
    axios
      .get("http://localhost:8888/dashboard/QOLReport")
      .then(response => {
        dispatch({
          type: action.GET_QOL_SUCCESS,
          payload: response.data
        });
      })
      .catch(function err() {
        dispatch({
          type: action.GET_QOL_ERROR,
          payload: err
        });
      });
  };
}
