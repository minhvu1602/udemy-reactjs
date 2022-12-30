import { call, put, takeEvery } from "redux-saga/effects";
import { getListOrderSuccess } from "../redux/action/orderAction";
import { ACTION_ORDER } from "../constants";
import axios from "axios";

function* getListOrderSaga() {
  try {
    const data = yield call(
      axios,
      "http://606989d5e1c2a10017544a2f.mockapi.io/api/order"
    );
    yield put(getListOrderSuccess(data));
  } catch (error) {
    //handle error
  }
}

export function* getOrderSaga() {
  yield takeEvery(ACTION_ORDER.getListOrder, getListOrderSaga);
}
