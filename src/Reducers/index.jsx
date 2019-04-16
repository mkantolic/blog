import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import PostReducer from "./PostReducer";
import UserReducer from "./UserReducer";
import LoadingReducer from "./LoadingReducer";
import UserProfileReducer from "./UserProfileReducer";
const rootReducer = combineReducers({
  form: formReducer,
  formProfile: formReducer,
  posts: PostReducer,
  user: UserReducer,
  userProfile: UserProfileReducer,
  loading: LoadingReducer
});

export default rootReducer;
