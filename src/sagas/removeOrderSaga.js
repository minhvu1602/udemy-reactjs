import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

export function* removeOrderSaga() {
  yield takeLatest("REMOVE_ORDER", removeOrderFrDb);
}

function* removeOrderFrDb({ payload }) {
  yield call(removeOrder, payload);
  debugger;
  yield put({ type: "REMOVE_ORDER_SUCCESS", payload });
}

async function removeOrder(id) {
  await axios.delete(
    `http://606989d5e1c2a10017544a2f.mockapi.io/api/order/${id}`
  );
}
