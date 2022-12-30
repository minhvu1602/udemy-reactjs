import { call, put, takeLatest } from "redux-saga/effects";
import { ACTION_ORDER } from "../constants";
import axios from "axios";

export function* updateOrderSaga() {
  yield takeLatest(ACTION_ORDER.updateOrder, updateOrderFrDb);
}

function* updateOrderFrDb({ payload }) {
  const res = yield call(updateOrder, payload);
  yield put({ type: ACTION_ORDER.updateOrderSuccess, payload, data: res.data });
}

async function updateOrder({ id, name, address, phone }) {
  return await axios.put(
    `http://606989d5e1c2a10017544a2f.mockapi.io/api/order/${id}`,
    {
      name,
      address,
      phone,
    }
  );
}
