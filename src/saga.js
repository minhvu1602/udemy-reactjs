import { call, put, takeEvery, all, takeLatest } from "redux-saga/effects";
import { getListPostSuccess } from "./redux/action/productAction";
import { getListOrderSuccess } from "./redux/action/order";
import axios from "axios";

function* getListPostSaga() {
  try {
    const data = yield call(
      axios,
      "http://606989d5e1c2a10017544a2f.mockapi.io/api/products"
    );
    yield put(getListPostSuccess(data));
  } catch (error) {
    //handle error
  }
}

function* postsSaga() {
  yield takeEvery("GET_LIST_POST", getListPostSaga);
}

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

function* getOrderSaga() {
  yield takeEvery("GET_ORDER", getListOrderSaga);
}

export function* postOrderSaga() {
  yield takeLatest("POST_ORDER", postOrderToDb);
}

function* postOrderToDb({ payload }) {
  yield call(addOrder, payload);
  yield put({ type: "POST_ORDER_SUCCESS", payload });
}

async function addOrder({ name, address, total, phone, items }) {
  await axios.post("http://606989d5e1c2a10017544a2f.mockapi.io/api/order", {
    name,
    address,
    total,
    phone,
    items,
  });
}

export function* removeOrderSaga() {
  yield takeLatest("REMOVE_ORDER", removeOrderFrDb);
}

function* removeOrderFrDb({ payload }) {
  yield call(removeOrder, payload);
  yield put({ type: "REMOVE_ORDER_SUCCESS", payload });
}

async function removeOrder(id) {
  await axios.delete(
    `http://606989d5e1c2a10017544a2f.mockapi.io/api/order/${id}`
  );
}

export default function* rootSaga() {
  yield all([postsSaga(), postOrderSaga(), getOrderSaga(), removeOrderSaga()]);
}
