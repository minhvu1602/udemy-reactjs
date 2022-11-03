import { call, put, takeEvery, all } from "redux-saga/effects";
import { getproducts } from "./services/product/index";
import { newOrder } from "./services/order";
import { getListPostSuccess } from "./redux/action/productAction";
import { postOrderSuccess } from "./redux/action/order";
import {
  addCart,
  addQuantity,
  removeCart,
  removeItem,
  subQuantity,
} from "./redux/action/cartAction";

function* getListPostSaga() {
  try {
    const data = yield call(getproducts);
    yield put(getListPostSuccess(data));
  } catch (error) {
    //handle error
  }
}

function* postsSaga() {
  yield takeEvery("GET_LIST_POST", getListPostSaga);
}

function* postOrder(action) {
  const data = action.product;
  try {
    yield call(newOrder, data);
    yield put(postOrderSuccess(data));
  } catch (error) {
    console.log(error);
  }
}

function* postOrderSaga() {
  yield takeEvery("POST_ORDER", postOrder);
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
