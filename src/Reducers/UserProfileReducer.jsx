import { FETCH_USER_PROFILE } from "../Actions/UserProfile";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_USER_PROFILE:
      return action.payload;
    default:
      return state;
  }
}
