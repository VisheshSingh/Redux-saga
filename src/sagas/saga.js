import { delay } from "redux-saga";
import { takeLatest, put } from "redux-saga/effects";

function* ageSyncUp() {
  yield delay(4000);
  yield put({ type: "ADD_SYNC_UP", value: 1 });
}

export function* watchAgeUp() {
  yield takeLatest("ADD", ageSyncUp);
}
