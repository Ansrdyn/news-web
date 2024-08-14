import { FETCH_USERLOGIN_SUCCESS } from "../actions/actionType";
const initialState = {};

export default function userLoginReducers(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERLOGIN_SUCCESS:
      return action.payload;

    default:
      return state;
  }
}