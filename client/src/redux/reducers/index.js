import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

const createRootReducer = (history) => {
  combineReducers({
    rotuer: connectRouter(history),
  });
};

export default createRootReducer;
