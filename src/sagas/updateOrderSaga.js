import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

export function* updateOrderSaga() {
  yield takeLatest("UPDATE_ORDER", updateOrderFrDb);
}

function* updateOrderFrDb({ payload }) {
  const res = yield call(updateOrder, payload);
  yield put({ type: "UPDATE_ORDER_SUCCESS", payload, data: res.data });
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
