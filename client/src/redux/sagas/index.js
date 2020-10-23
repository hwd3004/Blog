import { all, fork } from "redux-saga/effects";
import axios from "axios";

import authSaga from "./authSaga";
import dotenv from "dotenv";
import postSaga from "./postSaga";
dotenv.config();

axios.defaults.baseURL = process.env.REACT_APP_BASIC_SERVER_URL;

// function* 는 제너레이터 함수라고 해서, 일반 함수는 값을 하나만 반환하지만,
// 제너레이터 함수는 여러 값을 반환할 수 있는, 최신 문법의 함수
export default function* rootSaga() {
  yield all([fork(authSaga), fork(postSaga)]);
}
