import { takeLatest, put } from "redux-saga/effects";

function* clearContentAsync() {
  yield put({ type: "CLEAR-CONTENT-ASYNC", value: 1 });
}

export function* watchClearContent() {
  yield takeLatest("CLEAR-CONTENT", clearContentAsync);
}
