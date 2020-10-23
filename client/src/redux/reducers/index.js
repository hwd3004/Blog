import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import authReducer from "./authReducer";
import postReducer from "./postReducer";

// {} 괄호 쓸거면 return도 적어주자
const createRootReducer = (history) => {
  return combineReducers({
    router: connectRouter(history),
    auth: authReducer,
    post: postReducer,
  });
};

export default createRootReducer;
