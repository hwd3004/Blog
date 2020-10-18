import { createStore, compose, applyMiddleware } from "redux";
import createMiddleWare from "redux-saga";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";

import createRootReducer from "./redux/reducers/index";
import rootSaga from "./redux/sagas";

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

const initialState = {};

const middlewares = [sagaMiddleware, routerMiddleware(history)];
const devtools = window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__;

const composeEnhancer =
  process.env.NODE_ENV === "production" ? compose : dovtools || compose;

const store = createStore(
  createRootReducer(history),
  initialState,
  composeEnhancer(applyMiddleware(...middleware))
);

sagaMiddleware.run(rootSaga);

export default store;
