import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

export function* postOrderSaga() {
  yield takeLatest("POST_ORDER", postOrderToDb);
}

function* postOrderToDb({ payload }) {
  yield call(addOrder, payload);
  yield put({ type: "POST_ORDER_SUCCESS", payload });
}

async function addOrder(payload) {
  await axios.post(
    "http://606989d5e1c2a10017544a2f.mockapi.io/api/order",
    payload
  );
}
