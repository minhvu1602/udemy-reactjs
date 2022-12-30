import { call, put, takeLatest } from "redux-saga/effects";
import { ACTION_ORDER } from "../constants";
import axios from "axios";

export function* removeOrderSaga() {
  yield takeLatest(ACTION_ORDER.removeOrder, removeOrderFrDb);
}

function* removeOrderFrDb({ payload }) {
  yield call(removeOrder, payload);
  yield put({ type: ACTION_ORDER.removeOrderSuccess, payload });
}

async function removeOrder(id) {
  await axios.delete(
    `http://606989d5e1c2a10017544a2f.mockapi.io/api/order/${id}`
  );
}
