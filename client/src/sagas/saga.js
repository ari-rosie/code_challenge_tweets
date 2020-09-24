import { takeLatest, put } from "redux-saga/effects";

function* setUserAsync() {
  yield put({ type: "SET-USER-ASYNC", value: 1 });
}

export function* watchSetUser() {
  yield takeLatest("SET-USER", setUserAsync);
}
