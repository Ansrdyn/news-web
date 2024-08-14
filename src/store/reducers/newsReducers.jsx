import { FETCH_NEWS_SUCCESS } from "../actions/actionType";
const initialState = { };

export default function newsReducers(state = initialState, action) {
  switch (action.type) {
    case FETCH_NEWS_SUCCESS:
      return action.payload;

    default:
      return state;
  }
}