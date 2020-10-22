import axios from "axios";
import { call, all, put, takeEvery, fork } from "redux-saga/effects";
import {
  CLEAR_ERROR_FAILURE,
  CLEAR_ERROR_REQUEST,
  CLEAR_ERROR_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  USER_LOADING_FAILURE,
  USER_LOADING_REQUEST,
  USER_LOADING_SUCCESS,
} from "../type";

// Login
const loginUserAPI = (loginData) => {
  console.log(loginData, "loginData");
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios.post("api/auth", loginData, config);
};

function* loginUser(loginAction) {
  try {
    const result = yield call(loginUserAPI, loginAction.payload);
    console.log(result);
    yield put({
      type: LOGIN_SUCCESS,
      payload: result.data,
    });
  } catch (error) {
    yield put({
      type: LOGIN_FAILURE,
      payload: error.response,
    });
    console.log(error);
  }
}

function* watchLoginUser() {
  yield takeEvery(LOGIN_REQUEST, loginUser);
}

// LOGOUT
function* logout() {
  try {
    yield put({
      type: LOGOUT_SUCCESS,
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: LOGOUT_FAILURE,
    });
  }
}

function* watchlogout() {
  yield takeEvery(LOGOUT_REQUEST, logout);
}

// User Loading
const userLoadingAPI = (token) => {
  console.log(token);

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  if (token) {
    config.headers["x-auth-token"] = token;
  }
  return axios.get("api/auth/user", config);
};

function* userLoading(loginAction) {
  try {
    console.log(loginAction, "userLoading");
    const result = yield call(userLoadingAPI, loginAction.payload);

    yield put({
      type: USER_LOADING_SUCCESS,
      payload: result.data,
    });
  } catch (error) {
    yield put({
      type: USER_LOADING_FAILURE,
      payload: error.response,
    });
    console.log(error);
  }
}

function* watchuserLoading() {
  yield takeEvery(USER_LOADING_REQUEST, userLoading);
}

// REGISTER
const registerUserAPI = (req) => {
  console.log(req, "req");

  return axios.post("api/user", req);
};

function* registerUser(action) {
  try {
    const result = yield call(registerUserAPI, action.payload);
    console.log(result, "RegisterUser Data");
    yield put({
      type: REGISTER_SUCCESS,
      payload: result.data,
    });
  } catch (error) {
    yield put({
      type: REGISTER_FAILURE,
      payload: error.response,
    });
    console.log(error);
  }
}

function* watchregisterUser() {
  yield takeEvery(REGISTER_REQUEST, registerUser);
}

// Clear Error
function* clearError(action) {
  try {
    yield put({
      type: CLEAR_ERROR_SUCCESS,
    });
  } catch (error) {
    yield put({
      type: CLEAR_ERROR_FAILURE,
    });
    console.log(error);
  }
}

function* watchclearError() {
  yield takeEvery(CLEAR_ERROR_REQUEST, clearError);
}

export default function* authSaga() {
  yield all([
    fork(watchLoginUser),
    fork(watchlogout),
    fork(watchuserLoading),
    fork(watchregisterUser),
    fork(watchclearError),
  ]);
}
