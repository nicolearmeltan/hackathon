import axios from "axios";
import * as action from "../constants/api";

export function getTotalLeaves() {
  return function(dispatch) {
    dispatch({ type: action.GET_TOTAL_LEAVES_PENDING });
    axios
      .get("http://localhost:8888/dashboard/leaveReport")
      .then(response => {
        dispatch({
          type: action.GET_TOTAL_LEAVES_SUCCESS,
          payload: response.data
        });
      })
      .catch(function err() {
        dispatch({
          type: action.GET_TOTAL_LEAVES_ERROR,
          payload: err
        });
      });
  };
}
