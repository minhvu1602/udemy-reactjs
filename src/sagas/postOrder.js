import { call, put, takeLatest } from "redux-saga/effects";
import { ACTION_ORDER } from "../constants";
import axios from "axios";

export function* postOrderSaga() {
  yield takeLatest(ACTION_ORDER.addNewOrder, postOrderToDb);
}

function* postOrderToDb({ payload }) {
  yield call(addOrder, payload);
  yield put({ type: ACTION_ORDER.addNewOrderSuccess, payload });
}

async function addOrder(payload) {
  await axios.post(
    "http://606989d5e1c2a10017544a2f.mockapi.io/api/order",
    payload
  );
}
