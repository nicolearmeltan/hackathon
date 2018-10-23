import axios from "axios";
import * as action from "../constants/api";

export function getAilments() {
  return function(dispatch) {
    dispatch({ type: action.GET_TOTAL_AILMENTS_PENDING });
    axios
      .get("http://localhost:8888/dashboard/SickLeaveAnalytics/AilmentsReport")
      .then(response => {
        dispatch({
          type: action.GET_TOTAL_AILMENTS_SUCCESS,
          payload: response.data
        });
      })
      .catch(function err() {
        dispatch({
          type: action.GET_TOTAL_AILMENTS_ERROR,
          payload: err
        });
      });
  };
}
