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
  console.log("3");
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

async function addOrder(payload) {
  await axios.post(
    "http://606989d5e1c2a10017544a2f.mockapi.io/api/order",
    payload
  );
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

export function* updateOrderSaga() {
  yield takeLatest("UPDATE_ORDER", updateOrderFrDb);
}

function* updateOrderFrDb({ payload }) {
  yield call(updateOrder, payload);
  yield put({ type: "UPDATE_ORDER_SUCCESS", payload });
}

async function updateOrder({ id, name, address, phone }) {
  await axios.put(
    `http://606989d5e1c2a10017544a2f.mockapi.io/api/order/${id}`,
    {
      name,
      address,
      phone,
    }
  );
}

export default function* rootSaga() {
  yield all([
    postsSaga(),
    postOrderSaga(),
    getOrderSaga(),
    removeOrderSaga(),
    updateOrderSaga(),
  ]);
}
