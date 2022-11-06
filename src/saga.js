import { call, put, takeEvery, all, takeLatest } from "redux-saga/effects";
import { getListPostSuccess } from "./redux/action/productAction";
import {
  addCart,
  addQuantity,
  removeCart,
  removeItem,
  subQuantity,
} from "./redux/action/cartAction";
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

function* addItemToCart(action) {
  const product = action.product;
  try {
    yield addCart(product);
  } catch (error) {
    console.log(error);
  }
}

function* addItemToCartSaga() {
  yield takeEvery("ADD_TO_CART", addItemToCart);
}

function* addQuantityCart(action) {
  const product = action.product;
  try {
    yield addQuantity(product);
  } catch (error) {
    console.log(error);
  }
}

function* addQuantityCartSaga(action) {
  yield takeEvery("ADD_QUANTITY", addQuantityCart);
}

function* subQuantityCart(action) {
  const product = action.product;
  try {
    yield subQuantity(product);
  } catch (error) {
    console.log(error);
  }
}

function* subQuantityCartSaga() {
  yield takeEvery("SUB_QUANTITY", subQuantityCart);
}

function* removeItemCart(action) {
  const product = action.product;
  try {
    yield removeItem(product);
  } catch (error) {
    console.log(error);
  }
}

function* removeItemCartSaga() {
  yield takeEvery("REMOVE_SINGLE_ITEM", removeItemCart);
}

function* removeAll() {
  try {
    yield removeCart();
  } catch (error) {
    console.log(error);
  }
}

function* removeAllSaga() {
  yield takeEvery("REMOVE_TO_CART", removeAll);
}

export default function* rootSaga() {
  yield all([
    postsSaga(),
    addItemToCartSaga(),
    addQuantityCartSaga(),
    subQuantityCartSaga(),
    removeItemCartSaga(),
    removeAllSaga(),
    postOrderSaga(),
  ]);
}
